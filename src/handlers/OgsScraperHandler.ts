import Koa from "koa";
import koabody from "koa-body";
import serverless from "serverless-http";
import Router from "koa-router";
import cors from "@koa/cors";
import Joi from "@hapi/joi";
import ogs from "open-graph-scraper";

const app = new Koa();
const router = new Router();

app.use(koabody());
app.use(cors());

router.post("/ogs", async (ctx: Koa.Context) => {
  try {
    let params = await Joi.object({
      url: Joi.string().required(),
    }).validateAsync(ctx.request.body);

    if (!params.url.includes("book.naver.com") && params.url[-1] != "/") {
      params.url += "/";
    }

    let result = await ogs({ url: params.url, maxRedirects: 5, retry: 1 });

    let data = {};
    if (result || result.result) {
      data = result.result;
    }

    ctx.status = 200;
    ctx.body = { msg: "suc", data: data };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { msg: err.message };
    return;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export const OgsScraperHandler = serverless(app);
