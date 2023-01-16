import mongoose from 'mongoose';

const ContactsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});

const ContactModel = mongoose.model('contacts', ContactsSchema);

export default ContactModel;