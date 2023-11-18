import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { ChevronRightIcon } from "lucide-react";
import Airtable from "airtable";
import SvgNomad from "~/assets/svg/nomad.svg";
import { Card } from "~/components/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Blocklance" },
    { name: "description", content: "Welcome to Blocklance!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const base = Airtable.base(process.env.AIRTABLE_TABLE_ID ?? "");
  const formData = await request.formData();

  const email = formData.get("email")?.valueOf().toString();

  await base("Participants").create([
    {
      fields: {
        Email: email,
        Name: email?.split("@")[0].replace(".", " "),
        Status: "Cant wait",
        "Current Role": "Freelancer",
      },
    },
  ]);

  return true;
}

export default function MainLayout() {
  return (
    <>
      <div className="w-full relative bg-gradient-to-l from-violet-300 to-violet-200 rounded-lg  flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-1/2 p-8 pt-4 md:p-16 md:pt-12">
          <div className="w-full text-stone-900 text-5xl font-semibold leading-[62px] mb-6">
            Welcome to the Future of Work!
          </div>
          <div className="w-full text-neutral-600 text-lg mb-8">
            A decentralized freelancing platform, connecting buyers and sellers.
            Low fees, secured Data—powered by the community!
          </div>
          <button className="px-8 py-4 opacity-40 bg-primary-700 rounded-lg justify-center items-center gap-4 inline-flex text-neutral-50 font-medium cursor-not-allowed">
            Launch App
            <ChevronRightIcon size={20} />
          </button>
        </div>
        <img src={SvgNomad} className="h-full" />
      </div>
      <div className="w-full mt-36">
        <h1 className="text-stone-900 text-3xl font-medium text-center mb-6">
          Everything you want. All in one.
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:m-24">
          <Card
            title="Maximizing your earnings"
            description="Retain 95% earnings, scale your freelance business effortlessly, work less, love what you do."
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 32.5V42.25H45.5V19.5H39V16.25H46.6668C47.3915 16.25 47.6548 16.3247 47.918 16.4677C48.181 16.6057 48.3962 16.8198 48.5355 17.082C48.6753 17.3453 48.75 17.6085 48.75 18.3332V43.4167C48.75 44.1415 48.6752 44.4048 48.5322 44.668C48.3943 44.931 48.1802 45.1462 47.918 45.2855C47.6548 45.4253 47.3915 45.5 46.6668 45.5H11.8333C11.1085 45.5 10.8453 45.4252 10.582 45.2822C10.319 45.1443 10.1038 44.9302 9.9645 44.668C9.828 44.4048 9.75 44.1415 9.75 43.42V32.5H13Z"
                  fill="#4B4B4B"
                />
                <path
                  d="M39 9.75H6.5V32.5H39V9.75ZM42.25 8.58325V33.6667C42.25 34.3915 42.1752 34.6548 42.0322 34.918C41.8943 35.181 41.6802 35.3962 41.418 35.5355C41.1548 35.6753 40.8915 35.75 40.1668 35.75H5.33325C4.6085 35.75 4.34525 35.6752 4.082 35.5322C3.81905 35.3943 3.60384 35.1802 3.4645 34.918C3.328 34.6548 3.25 34.3915 3.25 33.67V8.58325C3.25 7.8585 3.32475 7.59525 3.46775 7.332C3.6057 7.06905 3.81978 6.85384 4.082 6.7145C4.34525 6.578 4.6085 6.5 5.33 6.5H40.1635C40.8882 6.5 41.1515 6.57475 41.4147 6.71775C41.6777 6.8557 41.8929 7.06978 42.0322 7.332C42.172 7.59525 42.2467 7.8585 42.2467 8.58325H42.25Z"
                  fill="#4B4B4B"
                />
                <path
                  d="M22.75 29.25C20.5951 29.25 18.5285 28.394 17.0048 26.8702C15.481 25.3465 14.625 23.2799 14.625 21.125C14.625 18.9701 15.481 16.9035 17.0048 15.3798C18.5285 13.856 20.5951 13 22.75 13C24.9049 13 26.9715 13.856 28.4952 15.3798C30.019 16.9035 30.875 18.9701 30.875 21.125C30.875 23.2799 30.019 25.3465 28.4952 26.8702C26.9715 28.394 24.9049 29.25 22.75 29.25ZM22.75 26C24.0429 26 25.2829 25.4864 26.1971 24.5721C27.1114 23.6579 27.625 22.4179 27.625 21.125C27.625 19.8321 27.1114 18.5921 26.1971 17.6779C25.2829 16.7636 24.0429 16.25 22.75 16.25C21.4571 16.25 20.2171 16.7636 19.3029 17.6779C18.3886 18.5921 17.875 19.8321 17.875 21.125C17.875 22.4179 18.3886 23.6579 19.3029 24.5721C20.2171 25.4864 21.4571 26 22.75 26Z"
                  fill="#4B4B4B"
                />
              </svg>
            }
          />
          <Card
            title="Decentralized Data"
            description="Onchain data security. Your control, access anywhere, no third parties"
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 18.4167C37.9661 18.4167 47.6666 15.5065 47.6666 11.9167C47.6666 8.32681 37.9661 5.41666 26 5.41666C14.0338 5.41666 4.33331 8.32681 4.33331 11.9167C4.33331 15.5065 14.0338 18.4167 26 18.4167Z"
                  stroke="#4B4B4B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6675 16.7917C7.17165 17.9833 4.33331 19.7253 4.33331 21.6667C4.33331 25.2568 14.0335 28.1667 26 28.1667C37.9665 28.1667 47.6666 25.2568 47.6666 21.6667C47.6666 19.7253 44.8294 17.9833 40.3325 16.7917C36.5126 17.8024 31.4946 18.4167 26 18.4167C20.5053 18.4167 15.4873 17.8024 11.6675 16.7917Z"
                  stroke="#4B4B4B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6675 26.5417C7.17165 27.7333 4.33331 29.4753 4.33331 31.4167C4.33331 35.0068 14.0335 37.9167 26 37.9167C37.9665 37.9167 47.6666 35.0068 47.6666 31.4167C47.6666 29.4753 44.8294 27.7333 40.3325 26.5417"
                  stroke="#4B4B4B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6675 36.2917C7.17165 37.4833 4.33331 39.2253 4.33331 41.1667C4.33331 44.7568 14.0335 47.6667 26 47.6667C37.9665 47.6667 47.6666 44.7568 47.6666 41.1667C47.6666 39.2253 44.8294 37.4833 40.3325 36.2917"
                  stroke="#4B4B4B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Card
            title="Community Driven"
            description="Where the community shapes the platform, for the people, by the people and the people themselves"
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 9.75001C22.75 7.85371 21.9967 6.03508 20.6558 4.69419C19.3149 3.35331 17.4963 2.60001 15.6 2.60001C13.7037 2.60001 11.885 3.35331 10.5442 4.69419C9.20328 6.03508 8.44998 7.85371 8.44998 9.75001C8.44998 11.6463 9.20328 13.4649 10.5442 14.8058C11.885 16.1467 13.7037 16.9 15.6 16.9C17.4963 16.9 19.3149 16.1467 20.6558 14.8058C21.9967 13.4649 22.75 11.6463 22.75 9.75001ZM11.05 9.75001C11.05 9.15249 11.1677 8.56083 11.3963 8.0088C11.625 7.45676 11.9601 6.95518 12.3826 6.53267C12.8051 6.11016 13.3067 5.77501 13.8588 5.54635C14.4108 5.3177 15.0025 5.20001 15.6 5.20001C16.1975 5.20001 16.7892 5.3177 17.3412 5.54635C17.8932 5.77501 18.3948 6.11016 18.8173 6.53267C19.2398 6.95518 19.575 7.45676 19.8036 8.0088C20.0323 8.56083 20.15 9.15249 20.15 9.75001C20.15 10.9567 19.6706 12.1141 18.8173 12.9673C17.964 13.8206 16.8067 14.3 15.6 14.3C14.3932 14.3 13.2359 13.8206 12.3826 12.9673C11.5293 12.1141 11.05 10.9567 11.05 9.75001ZM6.49998 19.5H17.3758C16.9494 20.306 16.6322 21.1796 16.445 22.1H6.49998C6.15519 22.1 5.82453 22.237 5.58074 22.4808C5.33694 22.7246 5.19998 23.0552 5.19998 23.4V24.7C5.19998 27.976 8.05738 31.4964 13.2496 32.318C12.4124 32.89 11.7156 33.6518 11.219 34.5384C5.73298 33.0538 2.59998 28.8262 2.59998 24.7V23.4C2.59998 22.3657 3.01087 21.3737 3.74226 20.6423C4.47365 19.9109 5.46563 19.5 6.49998 19.5ZM20.4854 19.5C21.7958 17.914 23.7796 16.9 26 16.9C27.557 16.8973 29.0722 17.404 30.3144 18.3429C31.5565 19.2818 32.4574 20.6013 32.8796 22.1C33.2559 23.4377 33.2347 24.856 32.8185 26.1818C32.4024 27.5077 31.6093 28.6837 30.5361 29.5665C29.4629 30.4492 28.1559 31.0004 26.7747 31.1529C25.3935 31.3054 23.9977 31.0526 22.7578 30.4252C21.8031 29.9393 20.9698 29.2451 20.3194 28.3939C19.6691 27.5427 19.2183 26.5563 19.0004 25.5074C18.7825 24.4586 18.803 23.3742 19.0605 22.3344C19.318 21.2946 19.8032 20.326 20.4854 19.5ZM21.8894 22.1C21.6333 22.6402 21.4861 23.2255 21.4562 23.8225C21.4264 24.4195 21.5144 25.0166 21.7152 25.5796C21.9161 26.1426 22.2259 26.6606 22.627 27.1039C23.028 27.5472 23.5124 27.9071 24.0526 28.1632C24.5927 28.4193 25.178 28.5665 25.7751 28.5963C26.3721 28.6262 26.9692 28.5382 27.5322 28.3373C28.0952 28.1365 28.6131 27.8267 29.0564 27.4256C29.4997 27.0246 29.8597 26.5402 30.1158 26C30.6329 24.9088 30.6954 23.6568 30.2895 22.5195C29.8836 21.3822 29.0425 20.4527 27.9513 19.9355C26.86 19.4183 25.6081 19.3558 24.4707 19.7618C23.3334 20.1677 22.4065 21.0088 21.8894 22.1ZM40.781 34.5384C40.2857 33.6513 39.5905 32.8919 38.7504 32.3206C43.94 31.4964 46.8 27.9734 46.8 24.7V23.4C46.8 23.0552 46.663 22.7246 46.4192 22.4808C46.1754 22.237 45.8448 22.1 45.5 22.1H35.555C35.3713 21.1935 35.0587 20.3179 34.6268 19.5H45.5C46.5343 19.5 47.5263 19.9109 48.2577 20.6423C48.9891 21.3737 49.4 22.3657 49.4 23.4V24.7C49.4 28.8262 46.2644 33.0512 40.781 34.5384ZM37.6662 34.7646C36.9566 34.1417 36.0442 33.7987 35.1 33.8H16.9C16.3874 33.7986 15.8797 33.8986 15.4059 34.0941C14.9321 34.2896 14.5016 34.5768 14.1392 34.9392C13.7768 35.3017 13.4896 35.7321 13.2941 36.2059C13.0985 36.6797 12.9986 37.1875 13 37.7V39C13 44.1246 17.836 49.4 26 49.4C34.164 49.4 39 44.1246 39 39V37.7C39 36.53 38.4852 35.4796 37.6662 34.762V34.7646ZM15.6 37.7C15.6 37.3552 15.7369 37.0246 15.9807 36.7808C16.2245 36.537 16.5552 36.4 16.9 36.4H35.1C35.4448 36.4 35.7754 36.537 36.0192 36.7808C36.263 37.0246 36.4 37.3552 36.4 37.7V39C36.4 42.7388 32.6768 46.8 26 46.8C19.3232 46.8 15.6 42.7388 15.6 39V37.7ZM36.4 2.60001C38.2963 2.60001 40.1149 3.35331 41.4558 4.69419C42.7967 6.03508 43.55 7.85371 43.55 9.75001C43.55 11.6463 42.7967 13.4649 41.4558 14.8058C40.1149 16.1467 38.2963 16.9 36.4 16.9C34.5037 16.9 32.685 16.1467 31.3442 14.8058C30.0033 13.4649 29.25 11.6463 29.25 9.75001C29.25 7.85371 30.0033 6.03508 31.3442 4.69419C32.685 3.35331 34.5037 2.60001 36.4 2.60001ZM36.4 5.20001C35.1932 5.20001 34.0359 5.67938 33.1826 6.53267C32.3293 7.38596 31.85 8.54327 31.85 9.75001C31.85 10.9567 32.3293 12.1141 33.1826 12.9673C34.0359 13.8206 35.1932 14.3 36.4 14.3C37.6067 14.3 38.764 13.8206 39.6173 12.9673C40.4706 12.1141 40.95 10.9567 40.95 9.75001C40.95 8.54327 40.4706 7.38596 39.6173 6.53267C38.764 5.67938 37.6067 5.20001 36.4 5.20001Z"
                  fill="#1F1F1F"
                />
              </svg>
            }
          />
          <Card
            title="Fast Transactions"
            description="Transfer money to anyone in seconds. It's all about simplicity and speed in the transfer process"
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5453 7.04167H30.4546C34.4369 7.04167 37.5916 7.04167 40.0594 7.37317C42.5988 7.7155 44.6549 8.43483 46.2778 10.0555C47.7468 11.5245 48.4769 13.3532 48.8561 15.5805C49.1313 17.2055 49.2309 19.1317 49.2678 21.3937C49.2961 21.5584 49.2991 21.7264 49.2764 21.892C49.2829 22.5117 49.2873 23.1573 49.2894 23.829C49.2906 24.26 49.1205 24.6738 48.8166 24.9793C48.6661 25.1306 48.4873 25.2508 48.2903 25.333C48.0934 25.4152 47.8822 25.4578 47.6688 25.4583C47.2378 25.4595 46.824 25.2894 46.5185 24.9854C46.2129 24.6815 46.0406 24.2686 46.0394 23.8377V23.2917H5.96045C5.95611 24.1323 5.95611 25.0337 5.95611 26C5.95611 30.1318 5.96045 33.0655 6.25945 35.295C6.55195 37.4725 7.10228 38.7292 8.01878 39.6457C8.93528 40.5622 10.1919 41.1125 12.3716 41.405C14.5989 41.704 17.5326 41.7083 21.6644 41.7083H24.9144C25.3454 41.7083 25.7587 41.8795 26.0635 42.1843C26.3682 42.489 26.5394 42.9024 26.5394 43.3333C26.5394 43.7643 26.3682 44.1776 26.0635 44.4824C25.7587 44.7871 25.3454 44.9583 24.9144 44.9583H21.5453C17.5629 44.9583 14.4083 44.9583 11.9404 44.6268C9.40111 44.2845 7.34495 43.5652 5.72211 41.9445C4.10145 40.3217 3.38211 38.2655 3.03978 35.7262C2.70828 33.2562 2.70828 30.1037 2.70828 26.1213V25.8787C2.70828 24.4443 2.70828 23.1183 2.72345 21.892C2.70022 21.7265 2.70241 21.5585 2.72995 21.3937C2.76461 19.4285 2.84478 17.732 3.03978 16.2738C3.38211 13.7345 4.10145 11.6783 5.72211 10.0555C7.34495 8.43483 9.40111 7.7155 11.9404 7.37317C14.4104 7.04167 17.5629 7.04167 21.5453 7.04167ZM6.01461 20.0417H45.9853C45.9333 18.4925 45.8336 17.212 45.6516 16.1243C45.3418 14.3 44.8131 13.1885 43.979 12.3543C43.0625 11.4378 41.8058 10.8875 39.6261 10.595C37.4009 10.296 34.4651 10.2917 30.3333 10.2917H21.6666C17.5348 10.2917 14.6011 10.296 12.3716 10.595C10.1941 10.8875 8.93745 11.4378 8.02095 12.3543C7.10445 13.2708 6.55411 14.5275 6.26161 16.7072C6.13161 17.6713 6.05795 18.7698 6.01461 20.0417ZM33.5833 28.7083C34.0143 28.7083 34.4276 28.8795 34.7323 29.1843C35.0371 29.489 35.2083 29.9024 35.2083 30.3333V39.4117L36.7683 37.8517C36.917 37.692 37.0964 37.564 37.2958 37.4751C37.4951 37.3863 37.7103 37.3386 37.9285 37.3347C38.1467 37.3309 38.3634 37.371 38.5657 37.4527C38.7681 37.5345 38.9519 37.6561 39.1062 37.8104C39.2605 37.9647 39.3822 38.1485 39.4639 38.3509C39.5456 38.5532 39.5857 38.7699 39.5819 38.9881C39.578 39.2063 39.5303 39.4215 39.4415 39.6208C39.3527 39.8202 39.2246 39.9996 39.0649 40.1483L34.7316 44.4817C34.4269 44.786 34.0139 44.9569 33.5833 44.9569C33.1527 44.9569 32.7396 44.786 32.4349 44.4817L28.1016 40.1483C27.942 39.9996 27.8139 39.8202 27.7251 39.6208C27.6363 39.4215 27.5885 39.2063 27.5847 38.9881C27.5808 38.7699 27.621 38.5532 27.7027 38.3509C27.7844 38.1485 27.9061 37.9647 28.0604 37.8104C28.2147 37.6561 28.3985 37.5345 28.6008 37.4527C28.8032 37.371 29.0199 37.3309 29.2381 37.3347C29.4563 37.3386 29.6714 37.3863 29.8708 37.4751C30.0701 37.564 30.2495 37.692 30.3983 37.8517L31.9583 39.4117V30.3333C31.9583 29.9024 32.1295 29.489 32.4342 29.1843C32.739 28.8795 33.1523 28.7083 33.5833 28.7083ZM42.1849 29.185C42.4896 28.8807 42.9027 28.7098 43.3333 28.7098C43.7639 28.7098 44.1769 28.8807 44.4816 29.185L48.8149 33.5183C48.9746 33.6671 49.1027 33.8465 49.1915 34.0458C49.2803 34.2452 49.328 34.4603 49.3319 34.6785C49.3357 34.8967 49.2956 35.1135 49.2139 35.3158C49.1322 35.5181 49.0105 35.7019 48.8562 35.8562C48.7019 36.0106 48.5181 36.1322 48.3157 36.2139C48.1134 36.2957 47.8967 36.3358 47.6785 36.3319C47.4603 36.3281 47.2451 36.2803 47.0458 36.1915C46.8464 36.1027 46.667 35.9747 46.5183 35.815L44.9583 34.255V43.3333C44.9583 43.7643 44.7871 44.1776 44.4823 44.4824C44.1776 44.7871 43.7643 44.9583 43.3333 44.9583C42.9023 44.9583 42.489 44.7871 42.1842 44.4824C41.8795 44.1776 41.7083 43.7643 41.7083 43.3333V34.255L40.1483 35.815C39.9995 35.9747 39.8201 36.1027 39.6208 36.1915C39.4215 36.2803 39.2063 36.3281 38.9881 36.3319C38.7699 36.3358 38.5532 36.2957 38.3508 36.2139C38.1485 36.1322 37.9647 36.0106 37.8104 35.8562C37.6561 35.7019 37.5344 35.5181 37.4527 35.3158C37.371 35.1135 37.3308 34.8967 37.3347 34.6785C37.3385 34.4603 37.3863 34.2452 37.4751 34.0458C37.5639 33.8465 37.692 33.6671 37.8516 33.5183L42.1849 29.185ZM11.3749 34.6667C11.3749 34.2357 11.5462 33.8224 11.8509 33.5176C12.1556 33.2129 12.569 33.0417 12.9999 33.0417H21.6666C22.0976 33.0417 22.5109 33.2129 22.8157 33.5176C23.1204 33.8224 23.2916 34.2357 23.2916 34.6667C23.2916 35.0976 23.1204 35.511 22.8157 35.8157C22.5109 36.1205 22.0976 36.2917 21.6666 36.2917H12.9999C12.569 36.2917 12.1556 36.1205 11.8509 35.8157C11.5462 35.511 11.3749 35.0976 11.3749 34.6667Z"
                  fill="#4B4B4B"
                />
              </svg>
            }
          />
          <Card
            title="AI Support"
            description="AI  solution for your Support needs"
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.5 23.8333V19.5H41.1667V15.1667C41.1632 14.0185 40.7056 12.9182 39.8937 12.1063C39.0818 11.2944 37.9816 10.8368 36.8333 10.8333H32.5V6.5H28.1667V10.8333H23.8333V6.5H19.5V10.8333H15.1667C14.0185 10.8368 12.9182 11.2944 12.1063 12.1063C11.2944 12.9182 10.8368 14.0185 10.8333 15.1667V19.5H6.5V23.8333H10.8333V28.1667H6.5V32.5H10.8333V36.8333C10.8368 37.9816 11.2944 39.0818 12.1063 39.8937C12.9182 40.7056 14.0185 41.1632 15.1667 41.1667H19.5V45.5H23.8333V41.1667H28.1667V45.5H32.5V41.1667H36.8333C37.9816 41.1632 39.0818 40.7056 39.8937 39.8937C40.7056 39.0818 41.1632 37.9816 41.1667 36.8333V32.5H45.5V28.1667H41.1667V23.8333H45.5ZM36.8333 36.8333H15.1667V15.1667H36.8333V36.8333Z"
                  fill="#4B4B4B"
                />
                <path
                  d="M24.6155 17.3333H21.7013L17.3463 34.6667H19.5715L20.5768 30.6042H25.5948L26.5741 34.6667H28.8751L24.6155 17.3333ZM20.8693 28.8687L23.075 19.3917H23.1746L25.3045 28.8687H20.8693ZM30.862 17.3333H33.0286V34.6667H30.862V17.3333Z"
                  fill="#4B4B4B"
                />
              </svg>
            }
          />
          <Card
            title="Global Accessibility"
            description="Accessible to everyone in any part of the universe"
            icon={
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.3875 40.6707C43.3977 40.6555 43.4129 40.6402 43.423 40.625C46.7492 36.6691 48.75 31.5707 48.75 26C48.75 20.4293 46.7492 15.3309 43.4281 11.375C43.418 11.3598 43.4027 11.3496 43.3926 11.3344C43.3367 11.2684 43.2859 11.2074 43.2301 11.1465C43.2098 11.1211 43.1895 11.1008 43.1691 11.0754L42.9609 10.8367L42.9559 10.8316C42.8797 10.7453 42.7984 10.659 42.7223 10.5727L42.7172 10.5676C42.5547 10.3949 42.3922 10.2223 42.2246 10.0547L42.2195 10.0496L41.9758 9.80586L41.9605 9.79063C41.8844 9.71445 41.8082 9.64336 41.732 9.57227C41.7066 9.54688 41.6813 9.52148 41.6508 9.49609C41.6 9.44531 41.5492 9.39961 41.4984 9.35391C41.4832 9.33867 41.4629 9.32344 41.4477 9.30312C37.3953 5.54531 31.9668 3.25 26 3.25C20.0332 3.25 14.6047 5.54531 10.5473 9.30312C10.532 9.31836 10.5117 9.33359 10.4965 9.35391C10.4457 9.39961 10.3949 9.45039 10.3441 9.50117C10.3187 9.52656 10.2934 9.55195 10.2629 9.57734C10.1867 9.64844 10.1105 9.72461 10.0344 9.7957L10.0191 9.81094L9.77539 10.0547L9.77031 10.0598C9.60273 10.2273 9.44023 10.4 9.27773 10.5727L9.27266 10.5777C9.19141 10.6641 9.11523 10.7504 9.03906 10.8367L9.03398 10.8418C8.96289 10.918 8.8918 10.9992 8.82578 11.0805C8.80547 11.1059 8.78516 11.1262 8.76484 11.1516C8.70898 11.2125 8.6582 11.2785 8.60234 11.3395C8.59219 11.3547 8.57695 11.3648 8.5668 11.3801C5.25078 15.3309 3.25 20.4293 3.25 26C3.25 31.5707 5.25078 36.6691 8.57188 40.625C8.58203 40.6402 8.59727 40.6555 8.60742 40.6707L8.76484 40.8586C8.78516 40.884 8.80547 40.9043 8.82578 40.9297L9.03398 41.1684C9.03398 41.1734 9.03906 41.1734 9.03906 41.1785C9.11523 41.2648 9.19141 41.3512 9.27266 41.4324L9.27773 41.4375C9.44023 41.6102 9.60273 41.7828 9.76523 41.9504L9.77031 41.9555C9.85156 42.0367 9.92773 42.118 10.009 42.1941L10.0242 42.2094C10.1918 42.377 10.3645 42.5395 10.5371 42.6969C14.6047 46.4547 20.0332 48.75 26 48.75C31.9668 48.75 37.3953 46.4547 41.4527 42.6969C41.6257 42.5383 41.7951 42.3758 41.9605 42.2094L41.9758 42.1941C42.057 42.1129 42.1383 42.0367 42.2145 41.9555L42.2195 41.9504C42.3871 41.7828 42.5496 41.6102 42.707 41.4375L42.7121 41.4324C42.7883 41.3461 42.8695 41.2648 42.9457 41.1785C42.9457 41.1734 42.9508 41.1734 42.9508 41.1684C43.0219 41.0922 43.093 41.0109 43.159 40.9297C43.1793 40.9043 43.1996 40.884 43.2199 40.8586C43.2773 40.7974 43.3332 40.7347 43.3875 40.6707ZM43.5957 33.4293C42.8949 35.0848 41.9707 36.6184 40.8434 38.0098C39.5737 36.9125 38.1856 35.9604 36.7047 35.1711C37.2938 32.7895 37.6594 30.1742 37.7559 27.4219H45.043C44.8906 29.4988 44.4031 31.5148 43.5957 33.4293ZM45.043 24.5781H37.7559C37.6594 21.8258 37.2938 19.2105 36.7047 16.8289C38.1926 16.0367 39.5789 15.082 40.8434 13.9902C43.2939 17.0065 44.7598 20.7022 45.043 24.5781ZM33.4293 8.4043C35.4453 9.25742 37.2785 10.4355 38.8934 11.9184C37.9553 12.7171 36.9455 13.4277 35.877 14.041C35.0797 11.7559 34.059 9.77031 32.8707 8.18086C33.0586 8.25195 33.2465 8.32812 33.4293 8.4043ZM28.8285 43.9816C28.3613 44.3473 27.8941 44.6266 27.4219 44.8145V35.3945C29.4368 35.5351 31.4183 35.9838 33.2973 36.725C32.8758 37.9742 32.3883 39.127 31.8246 40.168C30.941 41.8133 29.9051 43.1285 28.8285 43.9816ZM31.8246 11.832C32.3832 12.8781 32.8758 14.0309 33.2973 15.275C31.4183 16.0162 29.4368 16.4649 27.4219 16.6055V7.19063C27.8891 7.37852 28.3613 7.65273 28.8285 8.02344C29.9051 8.87148 30.941 10.1867 31.8246 11.832ZM27.4219 32.5457V27.4219H34.9121C34.8309 29.6664 34.5516 31.8449 34.0844 33.9117L34.0691 33.9727C31.938 33.1645 29.6969 32.6834 27.4219 32.5457ZM27.4219 24.5781V19.4543C29.7477 19.3121 31.982 18.8195 34.0691 18.0273L34.0844 18.0883C34.5516 20.1551 34.8309 22.3285 34.9121 24.5781H27.4219ZM24.5781 27.4219V32.5457C22.2523 32.6879 20.018 33.1805 17.9309 33.9727L17.9156 33.9117C17.4484 31.8449 17.1691 29.6715 17.0879 27.4219H24.5781ZM17.0879 24.5781C17.1691 22.3336 17.4484 20.1551 17.9156 18.0883L17.9309 18.0273C20.018 18.8195 22.2473 19.3121 24.5781 19.4543V24.5781H17.0879ZM24.5781 35.3945V44.8094C24.1109 44.6215 23.6387 44.3473 23.1715 43.9766C22.0949 43.1285 21.0539 41.8082 20.1703 40.1629C19.6117 39.1168 19.1191 37.9641 18.6977 36.7199C20.5867 35.9785 22.552 35.5367 24.5781 35.3945ZM24.5781 16.6055C22.5632 16.4649 20.5817 16.0162 18.7027 15.275C19.1242 14.0258 19.6117 12.873 20.1754 11.832C21.059 10.1867 22.0949 8.86641 23.1766 8.01836C23.6437 7.65273 24.1109 7.37344 24.5832 7.18555V16.6055H24.5781ZM18.5707 8.4043C18.7586 8.32812 18.9414 8.25195 19.1293 8.18086C17.941 9.77031 16.9203 11.7559 16.123 14.041C15.0566 13.4316 14.0461 12.7207 13.1066 11.9184C14.7215 10.4355 16.5547 9.25742 18.5707 8.4043ZM8.4043 18.5707C9.10508 16.9152 10.0293 15.3816 11.1566 13.9902C12.4211 15.082 13.8074 16.0367 15.2953 16.8289C14.7063 19.2105 14.3406 21.8258 14.2441 24.5781H6.95703C7.10938 22.5012 7.59688 20.4852 8.4043 18.5707ZM6.95703 27.4219H14.2441C14.3406 30.1742 14.7063 32.7895 15.2953 35.1711C13.8144 35.9604 12.4263 36.9125 11.1566 38.0098C8.70609 34.9935 7.24023 31.2978 6.95703 27.4219ZM18.5707 43.5957C16.5547 42.7426 14.7215 41.5645 13.1066 40.0816C14.0461 39.2793 15.0566 38.5734 16.123 37.959C16.9203 40.2441 17.941 42.2297 19.1293 43.8191C18.9414 43.748 18.7535 43.6719 18.5707 43.5957ZM33.4293 43.5957C33.2414 43.6719 33.0586 43.748 32.8707 43.8191C34.059 42.2297 35.0797 40.2441 35.877 37.959C36.9434 38.5684 37.9539 39.2793 38.8934 40.0816C37.2875 41.5583 35.439 42.747 33.4293 43.5957Z"
                  fill="#4B4B4B"
                />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
}
