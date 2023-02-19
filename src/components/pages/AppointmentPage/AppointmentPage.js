import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppointmentPage.module.css';
import { Box, Button, CircularProgress, Divider, TextField, Typography } from '@mui/material';
import { withTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import dateFormat from 'dateformat';
import SendIcon from '@mui/icons-material/Send';
import { useSnackbar } from 'notistack';

const AppointmentPage = ({ t, callbackOnSubmit }) => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [sendingEmail, setSendingEmail] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    console.log('formData: ', data);
    enqueueSnackbar(t('success.emailSent'), { variant:'success' });
    callbackOnSubmit && callbackOnSubmit();
  }

  return (
    <Box className={styles.AppointmentPage} component='form' onSubmit={handleSubmit(onSubmit)} data-testid="AppointmentPage" >
      <Box margin={2} />
      <TextField {...register("name", { required: true })}
        fullWidth
        type='text'
        label={t('appointmentForm.labels.name')}
        id="appointmentForm.labels.name"
        helperText={errors.name ? t('appointmentForm.errors.requiredField') : null}
        error={errors.name ? true : false}
      />
      <TextField {...register("lastName", { required: true })}
        fullWidth
        type='text'
        label={t('appointmentForm.labels.lastName')}
        id="appointmentForm.labels.lastName"
        helperText={errors.lastName ? t('appointmentForm.errors.requiredField') : null}
        error={errors.lastName ? true : false}
        sx={{ marginTop: 2 }}
      />
      <TextField {...register("phone", { required: true })}
        fullWidth
        type='number'
        label={t('appointmentForm.labels.phone')}
        id="appointmentForm.labels.phone"
        helperText={errors.phone ? t('appointmentForm.errors.requiredField') : null}
        error={errors.phone ? true : false}
        sx={{ marginTop: 2 }}
      />
      <TextField {...register("email", { required: true })}
        fullWidth
        type='email'
        label={t('appointmentForm.labels.email')}
        id="appointmentForm.labels.email"
        helperText={errors.email ? t('appointmentForm.errors.requiredField') : null}
        error={errors.email ? true : false}
        sx={{ marginTop: 2 }}
      />
      <TextField {...register("date", { required: true })}
        fullWidth
        type='date'
        label={t('appointmentForm.labels.date')}
        id="appointmentForm.labels.date"
        helperText={errors.date ? t('appointmentForm.errors.requiredField') : null}
        error={errors.date ? true : false}
        sx={{ marginTop: 2 }}
        defaultValue={dateFormat(new Date(), 'yyyy-mm-dd')}
      />
      <TextField {...register("affair", { required: false })}
        fullWidth
        type='text'
        label={t('appointmentForm.labels.affair')}
        id="appointmentForm.labels.affair"
        helperText={errors.affair ? t('appointmentForm.errors.requiredField') : null}
        error={errors.affair ? true : false}
        sx={{ marginTop: 2 }}
      />
      <TextField {...register("messageData", { required: false })}
        fullWidth
        multiline
        rows={5}
        type='text'
        label={t('appointmentForm.labels.message')}
        id="appointmentForm.labels.message"
        helperText={errors.messageData ? t('appointmentForm.errors.requiredField') : null}
        error={errors.messageData ? true : false}
        sx={{ marginTop: 2 }}
      />
      <Box margin={2} />
      <Button type='submit' variant="contained" color='secondary' endIcon={sendingEmail ? <CircularProgress size={18} /> : <SendIcon />} disabled={sendingEmail}>
        {t('appointmentForm.shedule')}
      </Button>
      <Box margin={2} />
    </Box>
  );
}

AppointmentPage.propTypes = {
  callbackOnSubmit: PropTypes.func,
};

AppointmentPage.defaultProps = {};

export default withTranslation()(AppointmentPage);
