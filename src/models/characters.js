class Character {
    constructor(id, title, description, image, address, coords){
        this.id = id.toString();
        this.title = title;    
        this.description = description;
        this.image = image;
        this.address = address;
        this.coords = coords;
    }
}

export default Character;