const express = require('express');
const router = express.Router();
const list = require('../public/javascripts/keywords_list');

router.get('/:keyword', function (req, res) {
    let keywordMatchedObj = list.keywordsList.filter(keywordInfo => {
        return keywordInfo["prefix"] === req.params.keyword;
    } )[0];
    res.send(keywordMatchedObj);
});

module.exports = router;

