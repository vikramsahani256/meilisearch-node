//************************************************************************************//
//                                AUTHOR : VIKRAM SAHANI                              //
//************************************************************************************//

const crypto          = require('crypto-js')

const secretKey       = config.get('crypto.secretKey') ;

exports.HmacSHA256Encryption = async function HmacSHA256Encryption(apiReference, opts) {
  try {

    return crypto.createHmac('sha256',secretKey ).update(opts.data).digest('hex');

  } catch (error) {
      logging.logError(apiReference, {EVENT: "HmacSHA256Encryption", ERROR: error});
      throw new Error(error)
  }
}

exports.cryptoComparison = async function cryptoComparison(apiReference, opts) {
  try {

    return crypto.timingSafeEqual(Buffer.from(opts.hash1), Buffer.from(opts.hash2));

  } catch (error) {
      logging.logError(apiReference, {EVENT: "cryptoComparison", ERROR: error});
      throw new Error(error)
  }
}
