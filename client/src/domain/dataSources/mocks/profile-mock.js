import logo from "logo.svg";
import image from "assets/img/full-screen-image-3.jpg";
import avatar from "assets/img/default-avatar.png";

export const profileMock = {
    userAvatar: avatar,
    fullName: 'John Doe',
    headerApp: 'MyApp',
    headerHref: '#',
    headerLogo: logo,
    sideBarImage: image,
    sideBarBgImage: { backgroundImage: "url(" + image + ")" }
}