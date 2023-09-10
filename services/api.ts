import axios from "axios";

const clientApi = axios.create({
  baseURL: "https://reqres.in/api/",
});

const errors = [
  {
    code: 400,
    message: "خطا در اطلاعات ارسال شده",
  },
  {
    code: 401,
    message: "کاربر پیدا نشد",
  },
  {
    code: 403,
    message: "دسترسی ندارید",
  },
  {
    code: 404,
    message: "داده ای یافت نشد",
  },
  {
    code: 500,
    message: "مشکل در سرور",
  },
];

// error handling
clientApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    errors?.forEach((errorItem) => {
      if (error.response && error.response.status === errorItem?.code) {
        console.log(error);
      }
    });
    return Promise.reject(error);
  }
);

export { clientApi };
