import express from 'express';
const router = express.Router();

import RouterClients from './client';
import RouterWorks from './work';

router.get('/',
    (req, res, next)=>{
        res.json({
            status: "success",
            message: "Home Page",
            data: {}
        })
    }
);

RouterClients(router);
RouterWorks(router);

export default router;