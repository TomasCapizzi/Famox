import {BiDownload} from 'react-icons/bi';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ManualBtn({product}) {
  const {t} = useTranslation();
  return (
    product.manual !== '' &&
        <button className='manual-btn'>
            <a href={product.manual} target='_blank' rel='noreferrer'>
              {t("misc.a")}<BiDownload/>
        </a>
    </button>
  )
}

export default ManualBtn