import type { NextFunction, Request, Response } from "express";
import { httpDuration, httpRequestsTotal } from ".";

export const httpMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = (Date.now() - start) / 1000;

    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    });

    httpDuration.observe(
      {
        method: req.method,
        route: req.route?.path || req.path,
      },
      duration,
    );
  });

  next();
};
