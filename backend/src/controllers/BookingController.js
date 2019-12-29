const Booking = require('../models/Booking')

module.exports = {
    async store(req, res){
        const user = req.headers.user_id
        const spot = req.params.spot_id
        const { date } = req.body
        
        const booking = await Booking.create({user, spot, date})
        await booking.populate('spot').populate('user').execPopulate()

        return res.json(booking)
    }
}