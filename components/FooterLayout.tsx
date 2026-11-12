"use client";

import Image from "next/image";

const data = {
  desc: "Collaboration platform for modern team",
  copyright: "© Copyright Team Inc.",
  services: [
    {
      header: "Company",
      list: [
        {label: "Product", link: "/homepage#product"},
        {label: "Blog", link: "/blog"},
        {label: "Support", link: "/homepage#support"}
      ]
    },
    {
      header: "Features",
      list: [
        {label: "Screen Sharing", link: "/homepage#screen-sharing"},
        {label: "iOS & Android Apps", link: "/homepage#ios-android-apps"},
        {label: "File Sharing", link: "/homepage#file-sharing"},
        {label: "User Management", link: "/homepage#user-management"}
      ]
    },
    {
      header: "Contact Us",
      list: [
        {label: "info@teamapp.com", link: "/contact#email"},
        {label: "1-800-200-300", link: "/contact#phone"},
        {label: "1010 Sunset Blv. Palo Alto, California", link: "/contact#address"}
      ]
    },
    {
      header: "Stay up to date",
      list: [
        {label: "Subscribe to our newsletter", link: "/subscribe"}
      ]
    }
  ]
}

export default function FooterLayout() {
  return (
    <div className="footer-container">
      <div className="content-pc">
        <div className="center-container">
          <div className="main-part">
            <div className="upper-part">
              <div className="icon-image">
                <Image width={138} height={52} src={'/common/team-logo-light.png'} alt="Team logo light" className="logo"/>
              </div>
              <div className="desc text">{data.desc}</div>
            </div>
            <div className="lower-part copyright text">{data.copyright}</div>
          </div>
          <div className="services-part">
            {data.services?.map((service, index) => (
              <div className={`service-list part-${index + 1}`} key={index}>
                <div className="service-header">{service.header}</div>
                {service.list?.map((list, idx) => (
                  <a href={list.link} key={idx}>
                    <div className="text">
                      {list.label}
                    </div>
                  </a>
                ))}
                {index === data.services?.length - 1 && (
                  <div className="email-button">
                    <span className="text">Email</span>
                    <Image src="/common/right-arrow-icon.png" alt="Right Arrow" width={15.58} height={15.18} className="right-arrow"/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}