
import ContactModel from "../model/ContactModel.js"

export const searchContactServices = (key) => {
    return ContactModel.find(
        {
            "$or": [
                { name: { $regex: key } }
            ]
        }
    );
}

export const fetchAllContact = () => {
    return ContactModel.find();
}

export const fetchContactById = (id) => {
    return ContactModel.findById(id);
}

export const storeContact = (req) => {
    return ContactModel.create({
        name: req.name,
        email: req.email,
        phone: req.phone
    });
}

export const updateContactService = (req, id) => {
    return ContactModel.updateOne({ _id: id }, {
        $set: {
            name: req.name,
            email: req.email,
            phone: req.phone
        },
    });
}

export const deleteContactServices = (id) => {
    return ContactModel.deleteOne({ _id: id })
}