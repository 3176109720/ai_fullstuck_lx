const Router = require('@koa/router');
const router = new Router();
const { findNoteListByType, findNoteDetailById} = require('../controllers/mysqlControl');

router.post('/findNoteListByType', async(ctx) => {
    const { note_type } = ctx.request.body
    try {
        const res = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'success'
        }
    } catch (error) {
        ctx.body = {
            code: '8006',
            data: [],
            msg: 'error'
        }
    }
})

router.get('/findNoteDetailById', async(ctx) => {
    const {id} = ctx.query
    try {
        const res = await findNoteDetailById(id)
        if (res.length) {
            ctx.body = {
                code: '8000',
                data: res[0],
                msg: 'success'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '查找失败'
            }
        }
    } catch (err) {
        console.log(err);
        ctx.body = {
            code: '500',
            data: 'err',
            msg: 'error'
        }
    }
})


module.exports = router;