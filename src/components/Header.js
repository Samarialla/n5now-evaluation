
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Headers() {
   const { t, i18n } = useTranslation();

   const handleLanguageChange = (languague) => {
      i18n.changeLanguage(languague);
   };
   return (<>
      <div className='row d-flex justify-content-between'>
         <div className='col-md-4 row'>
            <div className='col-md-4'>
            <Link className='movie--pointer' to='/harry-potter'>{t('list-harry')}</Link>
            </div>
            <div className='col-md-4'>
            <Link className='movie--pointer' to='/ricky-morty'>{t('list-ricky')}</Link>
            </div>
         </div>
         <div className='col-md-3 row offset-md-5 d-flex flex-row-reverse'>
            <div className='col-md-2'>
               <button onClick={() => handleLanguageChange('es')} className='btn btn-sm btn-primary'>Español</button>
            </div>
            <div className='col-md-2'>
               <button onClick={() => handleLanguageChange('en')} className='btn btn-sm btn-success'>English</button>
            </div>
         </div>
         <br></br>
      </div >
   </>)
} 