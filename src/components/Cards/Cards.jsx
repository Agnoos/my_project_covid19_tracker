import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(confirmed)
    if (!confirmed) {
        return 'Loading...'
    }




    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textPrimary" gutterBottom>{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                        />    
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de recuperados do COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de recuperados do COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards