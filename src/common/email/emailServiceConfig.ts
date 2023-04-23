/* eslint-disable */
import emailjs from 'emailjs-com';

export interface SendOrderConfirmationEmailParams {
  email_reply: string;
  userName: string;
  totalAmount: number;
  order_id: string;
  shippingAddress_city: string;
  shippingAddress_country: string;
  shippingAddress_line1: string;
  shippingAddress_postal: string;
  billingAddress_city: string;
  billingAddress_country: string;
  billingAddress_line1: string;
  billingAddress_postal: string;
}

export function sendSupportEmail(data: any): any {
  emailjs
    .sendForm('service_xbdpcis', 'template_7lnpy77', data, 'qoVsxq6zB8uXGXKm5')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export const sendOrderConfirmationEmail = async ({
  order_id,
  email_reply,
  userName,
  totalAmount,
  shippingAddress_city,
  shippingAddress_country,
  shippingAddress_line1,
  shippingAddress_postal,
  billingAddress_city,
  billingAddress_country,
  billingAddress_line1,
  billingAddress_postal
}: SendOrderConfirmationEmailParams): Promise<void> => {
  const templateParams = {
    userName,
    totalAmount,
    email_reply,
    order_id,
    shippingAddress_city,
    shippingAddress_country,
    shippingAddress_line1,
    shippingAddress_postal,
    billingAddress_city,
    billingAddress_country,
    billingAddress_line1,
    billingAddress_postal
  };

  try {
    const result = await emailjs.send(
      'service_xbdpcis',
      'template_kj05g2i',
      templateParams,
      'qoVsxq6zB8uXGXKm5'
    );

    console.log('Email sent successfully:', result.text);
  } catch (error: any) {
    console.error('Email failed to send:', error.text);
  }
};
