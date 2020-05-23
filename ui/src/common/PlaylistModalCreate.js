import React from 'react'
import { useDataProvider, useTranslate } from 'react-admin'
import { MenuItem, Divider } from '@material-ui/core'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

import NewPlaylistIcon from '@material-ui/icons/Add'
import PlaylistCreate from '../playlist/PlaylistCreate'

export default function PlaylistModalCreate(props) {
  const translate = useTranslate()
  const dataProvider = useDataProvider()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (e) => {
    e.preventDefault()

    setOpen(true)
    e.stopPropagation()
  }

  const handleClickClose = (e) => {
    setOpen(false)
    // Close the Add to playlist dropdown when modal is closing
    // FIXME: Dropdown should close when modal opens
    props.parentOnClose && props.parentOnClose(e)
    // Required, else when modal is closing, the current track starts playing
    e.stopPropagation()
  }
  const handleSubmit = () => {
    // Create playlist
    // Send playlist id to parent
    // Parent add track to playlist (avoiding duplicate AddToPlaylist logic)
    props.onReceiveData('DATA')
  }

  return (
    <div>
      <MenuItem value="newPlaylist" key="newPlaylist" onClick={handleClickOpen}>
        {<NewPlaylistIcon fontSize="small" />}&nbsp;
        {translate('resources.playlist.actions.newPlaylist')}
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {translate('resources.playlist.actions.newPlaylist')}
        </DialogTitle>
        <DialogContent>
          <PlaylistCreate />
          {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={translate('resources.playlist.fields.name')}
              type="text"
              fullWidth
            /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            {translate('ra.action.cancel')}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {translate('ra.action.create')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
