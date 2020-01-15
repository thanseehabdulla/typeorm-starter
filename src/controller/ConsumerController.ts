import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Consumer} from "../entity/Consumer";

export class ConsumerController {

    private consumerRepository = getRepository(Consumer);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.consumerRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.consumerRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.consumerRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.consumerRepository.findOne(request.params.id);
        await this.consumerRepository.remove(userToRemove);
    }
}