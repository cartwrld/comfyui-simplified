import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Controller } from '../decorator/Controller'
import { Route } from '../decorator/Route'
import {exec} from "child_process";
import {ComfyUtils} from "../utils/ComfyUtils";
const comfyui = new ComfyUtils();
@Controller('/generate')
export class GenerateController {


  // TODO ok so its working when you do a postman call to GET localhost:3004/users

  /**
   * Retrieves all users from the database and requires user authentication.
   *
   * @param req {Request} the request
   * @param res {Response} the response
   * @param next {NextFunction} the next function
   */
  // @Route('GET')
  // async all (req: Request, res: Response, next: NextFunction): Promise<any> {
  //   console.log("before")
  //   await comfyui.generate();
  //
  // }

  @Route('POST')
  async generate(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      console.log("before");
      const workflowData = req.body;
      await comfyui.generate(workflowData);
      res.status(200).json({ message: 'Generation successful' });
    } catch (error) {
      console.error('Generation failed:', error);
      res.status(500).json({ message: 'Generation failed', error: error.message });
    }
  }



}
