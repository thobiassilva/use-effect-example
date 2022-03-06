import { Box, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function BoxContainer() {
  const [state, setState] = useState({
    width: `100px`,
    height: `100px`,
    borderRadius: `0%`,
    backgroundColor: `#fff`,
  });

  useEffect(() => {
    document.getElementById('color').innerHTML = state.backgroundColor;
    document.getElementById('box').style.width = state.width;
    document.getElementById('box').style.height = state.height;
    document.getElementById('box').style.backgroundColor =
      state.backgroundColor;
    document.getElementById('box').style.borderRadius = state.borderRadius;
  });

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box
        id="box"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Fab
          color="primary"
          sx={{
            background: `linear-gradient(to bottom, #a1ffce 5%, #faffd1 100%)`,
          }}
          onClick={() =>
            setState(() => ({
              width: `${getRandomInt(100, 500)}px`,
              height: `${getRandomInt(100, 500)}px`,
              borderRadius: `${getRandomInt(5, 50)}%`,
              backgroundColor: `#${((Math.random() * 0xffffff) << 0)
                .toString(16)
                .padStart(6, '0')}`,
            }))
          }
        >
          <PlayCircleOutlineIcon />
        </Fab>
        <h3 id="color"></h3>
      </Box>
    </Box>
  );
}
