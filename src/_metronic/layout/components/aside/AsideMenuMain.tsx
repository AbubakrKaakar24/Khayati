/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <AsideMenuItem
        to='/customer'
        icon='/media/icons/duotune/communication/com006.svg'
        title='Customer'
        fontIcon='bi-person'
      />
      <AsideMenuItem
        to='/embellishmentType'
        icon='/media/icons/duotune/art/art003.svg'
        title='Embellishment Types'
        fontIcon='bi-brush'
      />
      <AsideMenuItem
        to='/measurement'
        icon='/media/icons/duotune/general/gen028.svg'
        title='Measurement'
        fontIcon='bi-rulers'
      />
      <AsideMenuItem
        to='/embellishment'
        icon='/media/icons/duotune/art/art001.svg'
        title='Embellishment'
        fontIcon='bi-patch-check'
      />
      <AsideMenuItem
        to=''
        icon='/media/icons/duotune/communication/com005.svg'
        title='Relative'
        fontIcon='bi-people'
      />
      <AsideMenuItem
        to=''
        icon='/media/icons/duotune/communication/com011.svg'
        title='Contact'
        fontIcon='bi-envelope'
      />

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
    </>
  )
}
