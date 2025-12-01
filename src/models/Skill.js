export default class Skill {

    constructor(image, name, color, imageSize, isExpert = false) {
        this.image = image;
        this.name = name;
        this.color = color;
        this.imageSize = imageSize;
        this.isExpert = isExpert;
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.name;
    }

    getColor() {
        switch (this.color) {
            case "purple":
                return "hover:shadow-purple-500/40";
            case "blue":
                return "hover:shadow-blue-400/40";
            case "yellow":
                return "hover:shadow-yellow-500/40";
            case "orange":
                return "hover:shadow-orange-600/40";
            case "red":
                return "hover:shadow-red-500/40";
            case "fuchsia":
                return "hover:shadow-fuchsia-500/40";
            case "cyan":
                return "hover:shadow-cyan-500/40";
            default:
                return "hover:shadow-neutral-500/40";
        }
    }

    getImageSize() {
        return this.imageSize;
    }

    getIsExpert() {
        return this.isExpert;
    }
}