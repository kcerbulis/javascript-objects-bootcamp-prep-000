var playlist = {
  lil_pump: 'Gucci Gang',
  savage: 'Bank Account',
  Skepta: 'It Aint Safe'
}

function updatePlaylist(playlist, name, title){
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, artistName){ 
  delete playlist.name
  return playlist
}