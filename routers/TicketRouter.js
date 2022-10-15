"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = require("../controllers/TicketController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const TicketValidators_1 = require("./validators/TicketValidators");
class TicketRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', TicketValidators_1.TicketValidators.Ticket(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.ticket);
        this.router.get('/bid/:id', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketValidators_1.TicketValidators.Ticket(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.ticketBids);
        this.router.get('/party/:id', TicketValidators_1.TicketValidators.partyTicket(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.ticket);
        this.router.get('/all', TicketController_1.TicketController.allTicket);
        this.router.get('/super_admin/all', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketController_1.TicketController.allOwnerTicket);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketValidators_1.TicketValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.create);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketValidators_1.TicketValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.update);
        this.router.patch('/result/:id', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketValidators_1.TicketValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.superadminAuthenticate, TicketValidators_1.TicketValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, TicketController_1.TicketController.delete);
    }
}
exports.default = new TicketRouter().router;
