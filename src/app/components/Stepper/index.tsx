import React from 'react';

export const Stepper = () => {
  return (
    <div className="flex items-start max-md:flex-col gap-y-6 gap-x-4 max-w-screen-lg mx-auto px-4 mt-4">
      <div className="w-full">
        <div className="w-full h-1 rounded-xl bg-gray-300"></div>
        <div className="mt-2 mr-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-gray-300" viewBox="0 0 24 24">
            <switch><g><g><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" /><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" /></g></g>
            </switch>
          </svg>
          <div className="ml-2">
            <h6 className="text-md font-semibold text-gray-400">Informações Pessoais</h6>
            <p className="text-base font-medium text-gray-400">Pendente</p>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <div className="w-full h-1 rounded-xl bg-green-500"></div>
        <div className="mt-2 mr-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-green-500" viewBox="0 0 24 24">
            <switch><g><g><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" /><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" /></g></g>
            </switch>
          </svg>
          <div className="ml-2">
            <h6 className="text-md font-semibold text-green-500">Informações Profissionais</h6>
            <p className="text-base font-medium text-green-500">Pendente</p>
          </div>
        </div>
      </div> */}
      <div className="w-full">
        <div className="w-full h-1 rounded-xl bg-gray-300"></div>
        <div className="mt-2 mr-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-gray-300" viewBox="0 0 24 24">
            <switch><g><g><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" /><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" /></g></g>
            </switch>
          </svg>
          <div className="ml-2">
            <h6 className="text-md font-semibold text-gray-400">Informações Profissionais</h6>
            <p className="text-base font-medium text-gray-400">Pendente</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-1 rounded-xl bg-gray-300"></div>
        <div className="mt-2 mr-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-gray-300" viewBox="0 0 24 24">
            <g transform="matrix(1.16 0 0 1.16 -1.92 -1.92)">
              <clipPath id="a">
                <path d="M0 0h24v24H0z" data-original="#000000" />
              </clipPath>
              <g clip-path="url(#a)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" data-original="#000000" />
                <path d="M7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" data-original="#000000" />
              </g>
            </g>
          </svg>
          <div className="ml-2">
            <h6 className="text-md font-semibold text-gray-400">Acesso ao Sistema</h6>
            <p className="text-base font-medium text-gray-400">Pendente</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-1 rounded-xl bg-gray-300"></div>
        <div className="mt-2 mr-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-gray-300" viewBox="0 0 24 24">
            <g transform="matrix(1.16 0 0 1.16 -1.92 -1.92)">
              <clipPath id="a">
                <path d="M0 0h24v24H0z" data-original="#000000" />
              </clipPath>
              <g clip-path="url(#a)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" data-original="#000000" />
                <path d="M7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" data-original="#000000" />
              </g>
            </g>
          </svg>
          <div className="ml-2">
            <h6 className="text-md font-semibold text-gray-400">Finalizar</h6>
            <p className="text-base font-medium text-gray-400">Pendente</p>
          </div>
        </div>
      </div>
    </div>
  );
};