import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapters';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()

//get = buscar | post = cadastrar | put = atualizar | patch = atualizar uma unica entidade | delet = excluir informações 



routes.post('/feedbacks', async  (req, res) => {
    const {type,comment,screenshot} = req.body; //desestruturado 
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const nodemailersMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailersMailAdapter
        )
    
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });
   
    return res.status(201).send()
});