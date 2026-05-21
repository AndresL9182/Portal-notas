import { useState } from 'react'

import Layout from '../components/Layout'

import {
  Library,
  Search,
  ExternalLink,
  Bookmark,
  User,
  BookOpen,
  CheckCircle2,
  XCircle
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function BibliotecaPage() {

  const [searchQuery, setSearchQuery] =
    useState('')

  const books = [

    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programación',
      isAvailable: true,
      coverUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
      description:
        'Buenas prácticas para escribir código limpio y mantenible.'
    },

    {
      id: 2,
      title: 'Database Systems',
      author: 'Ramez Elmasri',
      category: 'Bases de Datos',
      isAvailable: true,
      coverUrl:
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
      description:
        'Fundamentos avanzados de sistemas gestores de bases de datos.'
    },

    {
      id: 3,
      title: 'Computer Networks',
      author: 'Andrew Tanenbaum',
      category: 'Redes',
      isAvailable: false,
      coverUrl:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop',
      description:
        'Arquitectura y protocolos modernos de redes.'
    }

  ]

  const filteredBooks =
    books.filter(book =>

      book.title
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )

      ||

      book.author
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )

      ||

      book.category
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )

    )

  return (

    <Layout>

      <div className="
        space-y-6
      ">

        {/* HEADER */}

        <section className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-4
        ">

          <div>

            <div className="
              flex
              items-center
              gap-2
              text-slate-400
              text-xs
              font-semibold
              mb-2
            ">

              <span>Inicio</span>

              <span>•</span>

              <span className="
                text-slate-600
              ">
                Biblioteca Virtual
              </span>

            </div>

            <h1 className="
              text-2xl
              font-bold
              text-slate-800
              flex
              items-center
              gap-3
            ">

              <Library className="
                w-6
                h-6
                text-blue-500
              " />

              Recursos de Ingeniería

            </h1>

          </div>

          <a

            href="https://www.sciencedirect.com"

            target="_blank"

            rel="noopener noreferrer"

            className="
              flex
              items-center
              gap-2
              bg-blue-500
              text-white
              px-4
              py-3
              rounded-2xl
              text-xs
              font-black
              uppercase
              tracking-widest
              shadow-md
              hover:bg-blue-600
              transition-all
            "

          >

            <ExternalLink
              className="w-4 h-4"
            />

            Base de Datos

          </a>

        </section>

        {/* SEARCH */}

        <div className="
          relative
          max-w-md
        ">

          <Search className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-4
            h-4
            text-slate-400
          " />

          <input

            type="text"

            placeholder="
              Buscar libros...
            "

            value={searchQuery}

            onChange={(e) =>
              setSearchQuery(
                e.target.value
              )
            }

            className="
              w-full
              pl-12
              pr-6
              py-4
              bg-white
              border
              border-slate-100
              rounded-2xl
              text-sm
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-blue-200
            "

          />

        </div>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {
            filteredBooks.map(
              (book, idx) => (

                <motion.div

                  key={book.id}

                  initial={{
                    opacity: 0,
                    y: 10
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    delay:
                      idx * 0.05
                  }}

                  className="
                    bg-white
                    rounded-3xl
                    border
                    border-slate-100
                    shadow-sm
                    overflow-hidden
                    flex
                    flex-col
                    hover:shadow-xl
                    transition-all
                  "

                >

                  {/* IMAGE */}

                  <div className="
                    h-52
                    relative
                    overflow-hidden
                    bg-slate-100
                  ">

                    <img

                      src={book.coverUrl}

                      alt={book.title}

                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-500
                      "

                    />

                    <div className="
                      absolute
                      top-4
                      right-4
                    ">

                      {
                        book.isAvailable
                        ? (

                          <span className="
                            bg-green-500
                            text-white
                            p-2
                            rounded-full
                            shadow-lg
                          ">

                            <CheckCircle2
                              className="
                                w-4
                                h-4
                              "
                            />

                          </span>

                        )
                        : (

                          <span className="
                            bg-red-500
                            text-white
                            p-2
                            rounded-full
                            shadow-lg
                          ">

                            <XCircle
                              className="
                                w-4
                                h-4
                              "
                            />

                          </span>

                        )
                      }

                    </div>

                    <div className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      bg-gradient-to-t
                      from-black/70
                      to-transparent
                      p-4
                    ">

                      <span className="
                        text-[10px]
                        font-black
                        text-white
                        uppercase
                        tracking-widest
                        bg-blue-500/80
                        px-2
                        py-1
                        rounded
                      ">

                        {book.category}

                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="
                    p-5
                    flex-1
                    flex
                    flex-col
                    space-y-3
                  ">

                    <div>

                      <h3 className="
                        text-lg
                        font-bold
                        text-[#1e2d4d]
                        leading-tight
                      ">

                        {book.title}

                      </h3>

                      <div className="
                        flex
                        items-center
                        gap-2
                        text-slate-400
                        mt-2
                      ">

                        <User className="
                          w-4
                          h-4
                        " />

                        <span className="
                          text-xs
                          font-bold
                        ">

                          {book.author}

                        </span>

                      </div>

                    </div>

                    <p className="
                      text-xs
                      text-slate-500
                      italic
                      leading-relaxed
                    ">

                      {book.description}

                    </p>

                    <div className="
                      pt-4
                      mt-auto
                      border-t
                      border-slate-100
                      flex
                      items-center
                      justify-between
                    ">

                      <button className="
                        flex
                        items-center
                        gap-2
                        text-blue-500
                        text-xs
                        font-black
                        uppercase
                        tracking-widest
                      ">

                        <BookOpen
                          className="
                            w-4
                            h-4
                          "
                        />

                        Leer

                      </button>

                      <button className="
                        text-slate-300
                        hover:text-yellow-500
                        transition-colors
                      ">

                        <Bookmark
                          className="
                            w-5
                            h-5
                          "
                        />

                      </button>

                    </div>

                  </div>

                </motion.div>

              )
            )
          }

        </div>

        {/* EMPTY */}

        {
          filteredBooks.length === 0 && (

            <div className="
              h-64
              flex
              flex-col
              items-center
              justify-center
              text-slate-400
              bg-white
              border
              border-slate-100
              rounded-3xl
              shadow-sm
            ">

              <Library className="
                w-14
                h-14
                opacity-10
                mb-4
              " />

              <p className="
                text-sm
                font-bold
                uppercase
              ">

                No se encontraron libros

              </p>

            </div>

          )
        }

      </div>

    </Layout>

  )

}