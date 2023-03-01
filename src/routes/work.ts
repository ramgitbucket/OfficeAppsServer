
import { Router } from 'express';

import { Save } from '../handlers/workHandler';

export default function RouterWorks(router: Router){
    router.post("/works/save",
        Save
    )
}