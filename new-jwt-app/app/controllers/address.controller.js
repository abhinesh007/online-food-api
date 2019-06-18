var mongoose = require('mongoose');

const Address = require('../models/address.model');
const HttpData = require('../models/httpError.model');

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

	addAddress: (req, res) => {

		mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
			let result = {};
			let status = 201;
			const tokenData = req.decoded;
			console.log('tokenData', tokenData);

			let address = req.body;
			address.userUUID = tokenData.uuid;

			if (!err && address) {
				Address.create(address, (err) => {
					if (!err) {
						result = HttpData(status, 'Address Created successfully');
						result.address = address;
					} else {
						status = 409;
						result = HttpData(status, 'Address Already Exists', err);
					}
					res.status(status).send(result);
				});
			} else {
				status = 500;
				result = HttpData(status, null, err);
				res.status(status).send(result);
			}

		});
	},

	getAddress: (req, res) => {

		mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

			let result = {};
			let status = 200;
			const reqUserUUID = req.params.userUUID;

			if (!err) {
				Address.findOne({ userUUID: reqUserUUID }, function (err, address) {
					if (!err) {
						console.log('address', address);
						result = HttpData(status, '');
						result.address = address;
						res.status(status).send(result);
					} else {
						status = 500;
						result = HttpData(status, null, err);
						res.status(status).send(result);
					}
				});
			} else {
				status = 500;
				result = HttpData(status, null, err);
				res.status(status).send(result);
			}
		});
	}




}
