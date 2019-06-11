var mongoose = require('mongoose');

const Address = require('../models/address.model');
const HttpData = require('../models/httpError.model');

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

	addAddress: (req, res) => {

		mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
			let result = {};
			let status = 201;
			const payload = req.decoded;
			console.log('payload', payload);

			let address = req.body;
			address.userUUID = payload.uuid;

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
			let status = 302;
			const reqUserUUID = req.params.userUUID;

			if (!err) {
				Address.findOne({ userUUID: reqUserUUID }, function (error, address) {
					if (!error) {
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
