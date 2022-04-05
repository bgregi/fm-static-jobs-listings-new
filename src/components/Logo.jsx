import React from "react"
import './Logo.css'
import logoPhotosnap from '../images/photosnap.svg'
import logoManage from '../images/manage.svg'
import logoAccount from '../images/account.svg'
import logoMyHome from '../images/myhome.svg'
import logoLoopStudios from '../images/loop-studios.svg'
import logoFaceIt from '../images/faceit.svg'
import logoShortly from '../images/shortly.svg'
import logoInsure from '../images/insure.svg'
import logoEyecamCo from '../images/eyecam-co.svg'
import logoTheAirFilterCompany from '../images/the-air-filter-company.svg'

export default function Logo(props) {
    // console.log(props.id)

    // console.log(typeof(props.id))
    let logo

    switch (props.id) {
        case 1 :
            logo = logoPhotosnap
            break
        case 2 :
            logo = logoManage
            break
        case 3 :
            logo = logoAccount
            break
        case 4 :
            logo = logoMyHome
            break
        case 5 :
            logo = logoLoopStudios
            break
        case 6 :
            logo = logoFaceIt
            break
        case 7 :
            logo = logoShortly
            break
        case 8 :
            logo = logoInsure
            break
        case 9 :
            logo = logoEyecamCo
            break
        case 10 :
            logo = logoTheAirFilterCompany
            break
        default:
    }

    return <div className="logo">
        <img src={logo} alt="Company Logo" />
    </div>
}