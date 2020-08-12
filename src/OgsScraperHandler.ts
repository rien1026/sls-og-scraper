import Joi from "@hapi/joi";
import ogs from "open-graph-scraper";

export const OgsScraperHandler = async (event: any, context: any) => {
  try {
    let params = await Joi.object({
      url: Joi.string().required(),
    }).validateAsync(JSON.parse(event.body));

    if (!params.url.includes("book.naver.com") && params.url[-1] != "/") {
      params.url += "/";
    }

    let result = await ogs({ url: params.url, maxRedirects: 5, retry: 1 });

    let data = {};
    if (result || result.result) {
      data = result.result;
    }

    return { statusCode: 200, body: JSON.stringify({ msg: "suc" }) };
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ msg: err.message }) };
  }
};
