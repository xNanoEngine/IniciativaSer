import { Cuentas } from "../persintence/models/Cuentas.js";

import {
  getAccount_,
  getAccouts_,
  deleteAccount_,
  updateAccount_,
  createAccounts_,
} from "../persintence/repository/cuentas.repository.js";

export function getAccounts(req, res) {
  getAccouts_().then(
    (data) => {
      res.status(200).json({ status: true, data: data });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export function createAccount(req, res) {
  const { name, password } = req.body;
  const cuenta = {
    name,
    password,
  };
  createAccounts_(cuenta).then(
    (data) => {
      res.status(200).json({ status: true, data: data });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export async function getAccount(req, res) {
  const { id } = req.params;
  getAccount_(id).then(
    (data) => {
      res.status(200).json({ status: true, data: data });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export const updateAccount = async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  const cuenta = {
    id,
    name,
    password,
  };
  updateAccount_(cuenta).then(
    (msg) => {
      res.status(200).json({ status: true, msg: msg });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
};

export function deleteAccount(req, res) {
  const { id } = req.params;
  deleteAccount_(id).then(
    (msg) => {
      res.status(200).json({ status: true, msg: msg });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}
