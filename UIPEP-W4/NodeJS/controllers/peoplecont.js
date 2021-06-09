const {people} = require('../data');

const getPeople = (req,res) => {
    const {limit,search} = req.query;

    let sortedPeople = [...people];
    if(limit) { 
        sortedPeople = sortedPeople.slice(0,Number(limit));
       
    }
    if(search) {
        sortedPeople = sortedPeople.filter((person) => {
            return person.name.startsWith(search);
        });
    }
    res.status(200).json({success: true , people: sortedPeople});
};

const addPeople = (req,res) => {
    const {id,name} = req.body;
    if(!name || !id) {
        return res
        .status(400)
        .json({success: false, msg: "Please provide valid values"})
    }
    res.status(201).json({success: true , data: [...people,{id,name}] });
};

const updatePeople = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPeople});
};

const deletePeople = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${req.params.id}`})
    }

    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({success: true, data: newPeople});
};

module.exports = {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople
}
 