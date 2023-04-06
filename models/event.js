export class Event {
    constructor(id, title, desc, image_url, category, date, time, venue, mode) {
        this.id = id;
        this.title = title,
        this.desc  = desc,
        this.image_url = image_url,
        this.category = category,
        this.date = date,
        this.time = time,
        this.venue = venue,
        this.mode = mode
    }
}