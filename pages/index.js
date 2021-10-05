import Head from 'next/head'
import * as React from 'react';
import { Typography, Box } from '@mui/material/';
import '@fontsource/roboto/400.css';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel Series</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <div>
          <Typography variant="h3" gutterBottom component="div">
            Marvel Series
          </Typography>
        </div>
      </Box>
    </div>
  )
}
