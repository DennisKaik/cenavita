var mongoose = require('mongoose'),
    item = mongoose.model('item');

exports.list_all_items = function (req, res) {
    console.log('list all item touched');
    item.find({}, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.create_a_item = function (req, res) {
    var new_item = new item(req.body);
    new_item.save(function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.read_a_item = function (req, res) {
    item.findById(req.params.itemId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.update_a_item = function (req, res) {
    item.findOneAndUpdate({ _id: req.params.itemId }, req.body, { new: true }, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.delete_a_item = function (req, res) {
    item.remove({
        _id: req.params.itemId
    }, function (err, item) {
        if (err)
            res.send(err);
        res.json({ message: 'item successfully deleted' });
    });
};