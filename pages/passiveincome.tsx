import { NowPlaying } from "../components";
import Image from "next/image";
import Link from "next/link";
import somnia from "../public/assests/logo/somnia.png";
import gradientnetwork from "../public/assests/logo/gradientnetwork.png";
import blessnetwork from "../public/assests/logo/blessnetwork.png";
import grass from "../public/assests/logo/grass.png";
import nodepay from "../public/assests/logo/nodepay.png";
import minionlab from "../public/assests/logo/minionlab.webp";
import dawn from "../public/assests/logo/dawn.png";
import teneoprotocol from "../public/assests/logo/teneoprotocol.png";
import agnthub from "../public/assests/logo/agnthub.png";
import distributeai from "../public/assests/logo/distributeai.png";
import kaisar from "../public/assests/logo/kaisar.png";
const name = "L RMN";
const belowLink = "Earn passive income effortlessly! Click the links below to start now";

export default function PassiveIncome() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col bg-primary">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-60 w-full bg-banner"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    style={{ width: "130px", height: "130px" }}
                    className="rounded-full border-4 border-solid border-primary bg-primary object-cover"
                    src="/profile.png"
                    alt="profile"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      {belowLink}
                    </p>
                  </div>
                </div>
                {/* Komponen Banners dan blok sosial media telah dihapus */}

                {/* Blok Link yang sudah ada */}
                <div className="max-w-s mt-1 w-full space-y-2">
                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/somnia"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={somnia} alt="Icon" width={16} height={16} />

                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Somnia Network
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              The fastest and most cost-efficient EVM-compatible
                              Layer 1 for a fully Onchain World
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/gradientnetwork"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={gradientnetwork} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Gradient Network
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Ubiquitous Compute
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/blessnetwork"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={blessnetwork} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Bless Network
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              The world&apos;s first
                              shared computer.
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/grass"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={grass} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Grass
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Earn a stake in AI
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* 5 Blok Link Tambahan */}
                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/nodepay"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={nodepay} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Nodepay
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Own the Future of AI
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/minionlab"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={minionlab} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Minion Lab
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Adopt your minions now,
                              the first on-chain fully autonomous agents
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/dawn"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={dawn} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Dawn Internet
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Referrals code: 3birr59z
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/teneoprotocol"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={teneoprotocol} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Teneo Protocol
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                                Referrals code: 3YTta
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/agnthub"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={agnthub} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                AGNT Hub
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              AI Agents singularity One App. One Hub.
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/distributeai"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={distributeai} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Distribute AI
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              The world&apos;s distributed Al supercomputer.
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                    <a
                      href="/kaisar"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full transition-all sm:hover:opacity-70"
                    >
                      <div>
                        <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                          <div className="flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <Image src={kaisar} alt="Icon" width={16} height={16} />
                            </div>
                            <div className="mx-4 flex flex-col">
                              <span className="text-ellipsis text-[16px] text-zinc-400">
                                Zero Kaisar
                              </span>
                              <span className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]">
                              Transform your compute power into real earnings
                              </span>
                            </div>
                          </div>
                          <span className="absolute right-2 text-zinc-600 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-4 w-8"
                            >
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>

                {/* Tambahan tombol Home */}
                <div className="mt-6">
                  <Link
                    href="/"
                    className="inline-block rounded bg-gray-800 px-3 py-1 text-zinc-400 transition-all hover:bg-gray-700"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
              <footer>
                <div className="container mx-auto text-center">
                  Made by TRAGIC in BOGOR
                  <p className="text-gray text-s">
                  © {new Date().getFullYear()} L RMN. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
