import { getbook } from '../services/book.service.js';

export const getResult = async (req, res, next) => {
  try {
    const result = await getbook();
    return res.status(200).json({
      status: 200,
      data: result,
      message: 'Successfully get book!',
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};