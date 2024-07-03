type Album = {
    artistName: string;
    albumTitle : string,
    tracks?: number
}

function make_album(artistName : string,albumTitle : string, track? :number){
    let albumInformation:Album={
        artistName:artistName,
        albumTitle:albumTitle,
        tracks: 65
    }
    if (albumInformation){
        albumInformation.artistName = artistName
    }
    console.log (albumInformation)
}

make_album("john alia","Akeli raat", 45)