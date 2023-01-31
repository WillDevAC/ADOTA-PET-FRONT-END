import { FunctionComponent } from "react";

import { FooterContainer, FooterGroup, FooterItem, FooterLogo } from "./styles";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo>
          <img
            src="https://lh3.googleusercontent.com/fife/AMPSemeNB0DJHKj4R4qyqiMTOfPN9W2zltWICYkvKtANl6WoEm3IAOzWO05MgnCXp2N_cf8x_5uMIonelLuzIiKdUtLzosyPE7ikWffsZKkNZ2r49F3z7g17lN1LS6c_XpopY-qDiHdtwZMgzZxMdxoBqEt6RwhgJSQ3Aq804DSFPfMsecPgAnbEAD_pFgqcXB6SfBCzsar9m0ow-YBGfc6ze6fl0GtIJEwQgPDBmK6wFQrvxsNWzcASU9z2m5kcWWJwJCZtVzB0cVbirRpcIWn6yoQB2ONEXIfczKDO_CTb2-ky0moTZTx027PEdK956mRBINFZjdjX4SfnuAjWS1EJBrcPqbxQbDKsCsaG9A6cqL1Ufyl6Iw4A8T7wIoHMfdrN7IhP4Pl5coeHmfgvazP7Nkp0jRnGfUGgxiITt1z1zwzDfMFSnikbO518L5WkrGE17pyRAC2-WSJcLzuttONsXzmp9AlVF3htfuD1NDeO2Va26NSyWz1CkDqWsNdJ3f2BhoFAMjmc1ij7hoO_UPvjuwhF92sRK9cz_7vDvqxQh1wXePZiY0VJUILoi5ZJ7_ToQrEGCJUe1LrOOzU6q9BVXyIcapaLBLYQwx377upQs8DsAy7N1XbOWz1773uipzcbpw0swX9u0LDLdbbx5DKmFx2tD9t9FyyZlcta5vpuc_ZliFp8agbexXRISxy_-6_e0qMXQoVQ02---Qeddf3XOPaivHcT2kiyVlH_Yb1k-SiYuJcsnyNjwbzD7kAw23im1U4GAEPfH1fTipC_7StpR1hAvVR97aZvpGOsaplCgfQsu_HxEkA2vUrlvvBVJKaME466zRc5ljPcoAg_H3KDGRTlw1pRMKKrzX1KVPf_4bLlGPIGkC1HvBKvzsgqc6GemF31INpw6oJwEKF5-hC2pJYH3LMq5lN0L0eXRDi2yfeCHlalPyV4Qk32dpM8OhiMki5Hxdjh1O23FiY7clStdnbwRIYggPHLdMlv2oMcJZW1ta0N-SBtH0r3WJcqCPI9TfpwLqa3xUfvba-IG-owjHFTjRwvSKCy1_mDTlPs5X2KzR4AaeZ03LnC-6efl6WhnjHtuCz7PVjKKOLRNty8Y_iL4NslN8taqJ0MmbZHdYyYnzBnsDoIFtyUpRjU8_UxaY8mFg8E-pnc6us4ytMmjVVTb8sy0rY9Kzb1uWDXOxP89fkvOxhj3jadmlI53gGKYRKAbcsnXoRWr2hycIMmV7_ScSSlFUWzq7Vpu8B7Sw2wVbKslBogPMi60j6VRFC7pBZ7v-1fQHD5qiTxPZiF3lLQS6zmc88Ry2fRvTWuAg9lOri6KzJ9ITS2Nk0xMLirmBELA3-PRCiP3cCX4C6gYhaIOuMw9nWS1cqKpnVd7X24BY3DS28SmXFs3TZoGt12OK1d4qq4prfvDQ-eCNaknY3q1u5ZgiS9gjNMHIFzowavNed2IV3KpisoDhvWEJnNoxF1WbRrord-cAlIH6plEpNTjZXyWeQTgoQ0iSLOj6Nt7hUj139LpvEU3NbWuv07b8FQMV8xZYtidKuRrhjvrnNS61-h_Vc=w2000-h1328"
            alt="Logo do site"
          />
          <span>Politicas de privacidade</span>
        </FooterLogo>
        <FooterGroup>
          <h3>Acompanhe</h3>
          <FooterItem>
            <AiOutlineFacebook color="#204BD3" size={20} />
            Facebook
          </FooterItem>
          <FooterItem>
            <AiOutlineLinkedin color="#204BD3" size={20} />
            Linkedin
          </FooterItem>
          <FooterItem>
            <AiOutlineFacebook color="#204BD3" size={20} />
            Instagram
          </FooterItem>
        </FooterGroup>
        <FooterGroup>
          <h3>Contatos</h3>
          <FooterItem>
            <AiOutlineMail color="#204BD3" size={20} />
            contato@example.com.br
          </FooterItem>
          <FooterItem>
            <AiOutlinePhone color="#204BD3" size={20} />
            xxxx-xxxx
          </FooterItem>
          <FooterItem>&nbsp;</FooterItem>
        </FooterGroup>
      </FooterContainer>
    </>
  );
};
