export type Address = {
  title: string,
  address: string,
  phone: string,
  iframeSrc: string,
  images: string[] | [],
}

export const address: Address[] = [
  {
    title: 'Querétaro',
    address: 'Acceso II 36 A, Industrial, 76120 Santiago de Querétaro, Qro.',
    phone: '442 402 0883',
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14936.481176138028!2d-100.4378255!3d20.623953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b87c3a249ed%3A0x66ed6e17ed3bad27!2sASM%20Steel%20Metal%20Quer%C3%A9taro!5e0!3m2!1sen!2smx!4v1702293514402!5m2!1sen!2smx",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipM1zUweGpSq37_mzTlaKdEFuivvD0V8_XHmvZ-L=s1360-w1360-h1020",
      "https://media.licdn.com/dms/image/D4E22AQEWVpb-d8vkpg/feedshare-shrink_1280/0/1702681546509?e=1705536000&v=beta&t=aw0oZkPmlREWdKH30tXbVhks3MdsezzPSfe82sxz3Ys",
      "https://media.licdn.com/dms/image/D4D22AQE7hsyASCFCow/feedshare-shrink_1280/0/1702314322672?e=1705536000&v=beta&t=VgG7qnUJP_OftGlhNXkDdULWIxAt7qhj-FmXe_w0QhA",
      "https://media.licdn.com/dms/image/D4E22AQGp3EopZALl1A/feedshare-shrink_2048_1536/0/1702499614132?e=1705536000&v=beta&t=frqVdOKc4gqGstLc2fGYJ5KVm255aRWGI7wH4WejKKg",
      "https://media.licdn.com/dms/image/D4E22AQEatMNfAtoZ1A/feedshare-shrink_1280/0/1701732459113?e=1705536000&v=beta&t=O-1zgsVvvLrkiWXsW0dg4CID7WmsoDocqrfSuW8cwtM",
    ],
  },
  {
    title: 'Tlalnepantla',
    address: 'Calle Amistad 9 col. Los Reyes, C.P. 54073 Tlalnepantla de Baz, Estado de México.',
    phone: '55 5565 1200',
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26973.091925951754!2d-99.22759674454888!3d19.51739412308844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d5c718bdf23%3A0x5a4bb792e53c8577!2sASM%20Steel%20Metal%2C%20S.A.%20de%20C.V.!5e0!3m2!1sen!2smx!4v1702791762770!5m2!1sen!2smx",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNatNuOacshzuJ0b_aEDBLSlJ2Qmuw4q2fhHmc6=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipPRdDCQMccsmp9TFKG-sSAX4Ypy6-1X9eesvOGU=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipNxvygTUSkIO4VekTu9S8Bg_nkyY8dFfV2O5n4e=s1360-w1360-h1020",
    ]
  }
]