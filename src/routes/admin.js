const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload-img');
const adminFormValidation = require('../middleware/admin-form-validation');


router.get('/', adminController.indexAdmin);
router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);
//inserir middleware nesta rota:
router.post('/create', upload.array("imagem", 3), adminFormValidation, adminController.createProducts);

router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/update/:id', adminController.updateProducts);
router.put('/update/:id', adminController.update)
router.post('/create',upload.array("images", 3),  adminController.createProducts);

router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/update/:id', adminController.updateProducts);
router.put('/update/:id', adminController.update)

router.get('/categorias', adminController.adminCategorias);
router.get('/categorias/add', adminController.addCategoria);

router.post('/categorias/create', adminController.createCategoria);


module.exports = router;