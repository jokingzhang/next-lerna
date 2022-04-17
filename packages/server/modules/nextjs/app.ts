import Koa from "koa";
import nextJS from "next";
import Router from "@koa/router";
import compression from "compression";
import koaConnect from "koa-connect";
import gracefulShutdown from "http-graceful-shutdown";

export interface IParam {
	port: number;
}

const dev = process.env.NODE_ENV !== "production";
const app = nextJS({ dev });
const handle = app.getRequestHandler();
const server = new Koa();
const beginTime = new Date().getTime();
server.use(koaConnect(compression()));
function logServerStart(port: number) {
	console.info(
		"===>",
		process.env.NODE_ENV,
		`started server on 0.0.0.0:${port}, url: http://localhost:${port} , take`,
		(new Date().getTime() - beginTime) / 1000,
		"s\n"
	);
}

server.use(async (ctx, next) => {
	if (ctx.path === "/activate") {
		// 服务器心跳处理
		ctx.body = "OK";
		return;
	}
	await next();
});

function useRouter() {
	const router = new Router();
	router.all("(.*)", async (ctx) => {
		ctx.res.statusCode = 200;
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});
	server.use(router.routes());
}

function startServer(param: IParam): Koa {
	const { port } = param;
	app
		.prepare()
		.then(() => {
			useRouter();
			const httpServer = server.listen(port, () => {
				logServerStart(port);
			});

			gracefulShutdown(httpServer, {
				development: process.env.NODE_ENV !== "production",
				finally() {
					console.log("Server graceful shut down completed.");
				},
			});
		})
		.catch((e) => {
			console.log(e);
		});

	return server;
}

const nextApp = { server, startServer };
export default nextApp;
