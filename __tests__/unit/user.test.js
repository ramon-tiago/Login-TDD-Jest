const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate')

describe('User Validation', () => {
    beforeEach(async () => {
        await truncate();
    })
    it('Shold encrypt user password', async () => {
        const user = await User.create({ 
            name: 'Ramon', 
            email: 'ramonx.tiago@hotmail.com', 
            password:'123456'
        });

        const compareHash = await bcrypt.compare('123456', user.password_hash);

        expect(compareHash).toBe(true);
    })
})