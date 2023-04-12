const { Router } = require ('express');
const { getData , showData } = require ('./Controller')

const router = Router ();

router.get ('/' , getData );
router.post('/' , showData)

module.exports = router;
