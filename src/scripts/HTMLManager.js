export const entryHTML = (object) => {
    return `
    <div class="entryCard">
    <h3>${object.title}</h3>
    <div><img src="${object.imageURL}" alt="Gif"></div>
    <div>${object.description}</div>
    <div>${object.timestamp}</div>
    </div>
    `
}