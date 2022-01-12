import { Request, Response } from "express";
import valiUrl from "valid-url";
import shortId from "shortid";
import { config } from "dotenv";
config();
import Url from "../models/url";

export const getUrl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { longUrl } = req.body;
  const baseUrl: any = process.env.baseUrl;

  //validating the baseurl
  if (!valiUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortId.generate();

  //Check long url
  if (valiUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        return res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        return res.json(url);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Server error");
    }
  } else {
    return res.status(401).json("invalid long url");
  }
};

export const urlIndex = async (req: Request, res: Response) => {
  try {
    const url: any = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
};
