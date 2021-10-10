/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/key": {
    get: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.key.project_id"];
          name?: parameters["rowFilter.key.name"];
          description?: parameters["rowFilter.key.description"];
          created_at?: parameters["rowFilter.key.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["key"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** key */
          key?: definitions["key"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.key.project_id"];
          name?: parameters["rowFilter.key.name"];
          description?: parameters["rowFilter.key.description"];
          created_at?: parameters["rowFilter.key.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.key.project_id"];
          name?: parameters["rowFilter.key.name"];
          description?: parameters["rowFilter.key.description"];
          created_at?: parameters["rowFilter.key.created_at"];
        };
        body: {
          /** key */
          key?: definitions["key"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/language": {
    get: {
      parameters: {
        query: {
          iso_code?: parameters["rowFilter.language.iso_code"];
          project_id?: parameters["rowFilter.language.project_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["language"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** language */
          language?: definitions["language"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          iso_code?: parameters["rowFilter.language.iso_code"];
          project_id?: parameters["rowFilter.language.project_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          iso_code?: parameters["rowFilter.language.iso_code"];
          project_id?: parameters["rowFilter.language.project_id"];
        };
        body: {
          /** language */
          language?: definitions["language"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/member": {
    get: {
      parameters: {
        query: {
          organization_id?: parameters["rowFilter.member.organization_id"];
          user_id?: parameters["rowFilter.member.user_id"];
          role?: parameters["rowFilter.member.role"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["member"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** member */
          member?: definitions["member"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          organization_id?: parameters["rowFilter.member.organization_id"];
          user_id?: parameters["rowFilter.member.user_id"];
          role?: parameters["rowFilter.member.role"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          organization_id?: parameters["rowFilter.member.organization_id"];
          user_id?: parameters["rowFilter.member.user_id"];
          role?: parameters["rowFilter.member.role"];
        };
        body: {
          /** member */
          member?: definitions["member"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/organization": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.organization.id"];
          name?: parameters["rowFilter.organization.name"];
          created_by_user_id?: parameters["rowFilter.organization.created_by_user_id"];
          created_at?: parameters["rowFilter.organization.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["organization"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** organization */
          organization?: definitions["organization"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.organization.id"];
          name?: parameters["rowFilter.organization.name"];
          created_by_user_id?: parameters["rowFilter.organization.created_by_user_id"];
          created_at?: parameters["rowFilter.organization.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.organization.id"];
          name?: parameters["rowFilter.organization.name"];
          created_by_user_id?: parameters["rowFilter.organization.created_by_user_id"];
          created_at?: parameters["rowFilter.organization.created_at"];
        };
        body: {
          /** organization */
          organization?: definitions["organization"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/project": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.project.id"];
          api_key?: parameters["rowFilter.project.api_key"];
          name?: parameters["rowFilter.project.name"];
          organization_id?: parameters["rowFilter.project.organization_id"];
          default_iso_code?: parameters["rowFilter.project.default_iso_code"];
          created_at?: parameters["rowFilter.project.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["project"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** project */
          project?: definitions["project"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.project.id"];
          api_key?: parameters["rowFilter.project.api_key"];
          name?: parameters["rowFilter.project.name"];
          organization_id?: parameters["rowFilter.project.organization_id"];
          default_iso_code?: parameters["rowFilter.project.default_iso_code"];
          created_at?: parameters["rowFilter.project.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.project.id"];
          api_key?: parameters["rowFilter.project.api_key"];
          name?: parameters["rowFilter.project.name"];
          organization_id?: parameters["rowFilter.project.organization_id"];
          default_iso_code?: parameters["rowFilter.project.default_iso_code"];
          created_at?: parameters["rowFilter.project.created_at"];
        };
        body: {
          /** project */
          project?: definitions["project"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/translation": {
    get: {
      parameters: {
        query: {
          key_name?: parameters["rowFilter.translation.key_name"];
          project_id?: parameters["rowFilter.translation.project_id"];
          iso_code?: parameters["rowFilter.translation.iso_code"];
          is_reviewed?: parameters["rowFilter.translation.is_reviewed"];
          text?: parameters["rowFilter.translation.text"];
          created_at?: parameters["rowFilter.translation.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["translation"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** translation */
          translation?: definitions["translation"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          key_name?: parameters["rowFilter.translation.key_name"];
          project_id?: parameters["rowFilter.translation.project_id"];
          iso_code?: parameters["rowFilter.translation.iso_code"];
          is_reviewed?: parameters["rowFilter.translation.is_reviewed"];
          text?: parameters["rowFilter.translation.text"];
          created_at?: parameters["rowFilter.translation.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          key_name?: parameters["rowFilter.translation.key_name"];
          project_id?: parameters["rowFilter.translation.project_id"];
          iso_code?: parameters["rowFilter.translation.iso_code"];
          is_reviewed?: parameters["rowFilter.translation.is_reviewed"];
          text?: parameters["rowFilter.translation.text"];
          created_at?: parameters["rowFilter.translation.created_at"];
        };
        body: {
          /** translation */
          translation?: definitions["translation"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          email?: parameters["rowFilter.user.email"];
          created_at?: parameters["rowFilter.user.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user */
          user?: definitions["user"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          email?: parameters["rowFilter.user.email"];
          created_at?: parameters["rowFilter.user.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          email?: parameters["rowFilter.user.email"];
          created_at?: parameters["rowFilter.user.created_at"];
        };
        body: {
          /** user */
          user?: definitions["user"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  key: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `project.id`.<fk table='project' column='id'/>
     */
    project_id: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    name: string;
    description?: string;
    created_at: string;
  };
  language: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    iso_code:
      | "ab"
      | "aa"
      | "af"
      | "ak"
      | "sq"
      | "am"
      | "ar"
      | "an"
      | "hy"
      | "as"
      | "av"
      | "ae"
      | "ay"
      | "az"
      | "bm"
      | "ba"
      | "eu"
      | "be"
      | "bn"
      | "bh"
      | "bi"
      | "bs"
      | "br"
      | "bg"
      | "my"
      | "ca"
      | "km"
      | "ch"
      | "ce"
      | "ny"
      | "zh"
      | "cu"
      | "cv"
      | "kw"
      | "co"
      | "cr"
      | "hr"
      | "cs"
      | "da"
      | "dv"
      | "nl"
      | "dz"
      | "en"
      | "eo"
      | "et"
      | "ee"
      | "fo"
      | "fj"
      | "fi"
      | "fr"
      | "ff"
      | "gd"
      | "gl"
      | "lg"
      | "ka"
      | "de"
      | "ki"
      | "el"
      | "kl"
      | "gn"
      | "gu"
      | "ht"
      | "ha"
      | "he"
      | "hz"
      | "hi"
      | "ho"
      | "hu"
      | "is"
      | "io"
      | "ig"
      | "id"
      | "ia"
      | "ie"
      | "iu"
      | "ik"
      | "ga"
      | "it"
      | "ja"
      | "jv"
      | "kn"
      | "kr"
      | "ks"
      | "kk"
      | "rw"
      | "kv"
      | "kg"
      | "ko"
      | "kj"
      | "ku"
      | "ky"
      | "lo"
      | "la"
      | "lv"
      | "lb"
      | "li"
      | "ln"
      | "lt"
      | "lu"
      | "mk"
      | "mg"
      | "ms"
      | "ml"
      | "mt"
      | "gv"
      | "mi"
      | "mr"
      | "mh"
      | "ro"
      | "mn"
      | "na"
      | "nv"
      | "nd"
      | "ng"
      | "ne"
      | "se"
      | "no"
      | "nb"
      | "nn"
      | "ii"
      | "oc"
      | "oj"
      | "or"
      | "om"
      | "os"
      | "pi"
      | "pa"
      | "ps"
      | "fa"
      | "pl"
      | "pt"
      | "qu"
      | "rm"
      | "rn"
      | "ru"
      | "sm"
      | "sg"
      | "sa"
      | "sc"
      | "sr"
      | "sn"
      | "sd"
      | "si"
      | "sk"
      | "sl"
      | "so"
      | "st"
      | "nr"
      | "es"
      | "su"
      | "sw"
      | "ss"
      | "sv"
      | "tl"
      | "ty"
      | "tg"
      | "ta"
      | "tt"
      | "te"
      | "th"
      | "bo"
      | "ti"
      | "to"
      | "ts"
      | "tn"
      | "tr"
      | "tk"
      | "tw"
      | "ug"
      | "uk"
      | "ur"
      | "uz"
      | "ve"
      | "vi"
      | "vo"
      | "wa"
      | "cy"
      | "fy"
      | "wo"
      | "xh"
      | "yi"
      | "yo"
      | "za"
      | "zu";
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `project.id`.<fk table='project' column='id'/>
     */
    project_id: string;
  };
  member: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `organization.id`.<fk table='organization' column='id'/>
     */
    organization_id: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id: string;
    role: "ADMIN" | "TRANSLATOR";
  };
  organization: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    name: string;
    created_by_user_id: string;
    created_at: string;
  };
  project: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    api_key: string;
    name: string;
    /**
     * Note:
     * This is a Foreign Key to `organization.id`.<fk table='organization' column='id'/>
     */
    organization_id: string;
    default_iso_code:
      | "ab"
      | "aa"
      | "af"
      | "ak"
      | "sq"
      | "am"
      | "ar"
      | "an"
      | "hy"
      | "as"
      | "av"
      | "ae"
      | "ay"
      | "az"
      | "bm"
      | "ba"
      | "eu"
      | "be"
      | "bn"
      | "bh"
      | "bi"
      | "bs"
      | "br"
      | "bg"
      | "my"
      | "ca"
      | "km"
      | "ch"
      | "ce"
      | "ny"
      | "zh"
      | "cu"
      | "cv"
      | "kw"
      | "co"
      | "cr"
      | "hr"
      | "cs"
      | "da"
      | "dv"
      | "nl"
      | "dz"
      | "en"
      | "eo"
      | "et"
      | "ee"
      | "fo"
      | "fj"
      | "fi"
      | "fr"
      | "ff"
      | "gd"
      | "gl"
      | "lg"
      | "ka"
      | "de"
      | "ki"
      | "el"
      | "kl"
      | "gn"
      | "gu"
      | "ht"
      | "ha"
      | "he"
      | "hz"
      | "hi"
      | "ho"
      | "hu"
      | "is"
      | "io"
      | "ig"
      | "id"
      | "ia"
      | "ie"
      | "iu"
      | "ik"
      | "ga"
      | "it"
      | "ja"
      | "jv"
      | "kn"
      | "kr"
      | "ks"
      | "kk"
      | "rw"
      | "kv"
      | "kg"
      | "ko"
      | "kj"
      | "ku"
      | "ky"
      | "lo"
      | "la"
      | "lv"
      | "lb"
      | "li"
      | "ln"
      | "lt"
      | "lu"
      | "mk"
      | "mg"
      | "ms"
      | "ml"
      | "mt"
      | "gv"
      | "mi"
      | "mr"
      | "mh"
      | "ro"
      | "mn"
      | "na"
      | "nv"
      | "nd"
      | "ng"
      | "ne"
      | "se"
      | "no"
      | "nb"
      | "nn"
      | "ii"
      | "oc"
      | "oj"
      | "or"
      | "om"
      | "os"
      | "pi"
      | "pa"
      | "ps"
      | "fa"
      | "pl"
      | "pt"
      | "qu"
      | "rm"
      | "rn"
      | "ru"
      | "sm"
      | "sg"
      | "sa"
      | "sc"
      | "sr"
      | "sn"
      | "sd"
      | "si"
      | "sk"
      | "sl"
      | "so"
      | "st"
      | "nr"
      | "es"
      | "su"
      | "sw"
      | "ss"
      | "sv"
      | "tl"
      | "ty"
      | "tg"
      | "ta"
      | "tt"
      | "te"
      | "th"
      | "bo"
      | "ti"
      | "to"
      | "ts"
      | "tn"
      | "tr"
      | "tk"
      | "tw"
      | "ug"
      | "uk"
      | "ur"
      | "uz"
      | "ve"
      | "vi"
      | "vo"
      | "wa"
      | "cy"
      | "fy"
      | "wo"
      | "xh"
      | "yi"
      | "yo"
      | "za"
      | "zu";
    created_at: string;
  };
  translation: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `key.name`.<fk table='key' column='name'/>
     */
    key_name: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `key.project_id`.<fk table='key' column='project_id'/>
     */
    project_id: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    iso_code:
      | "ab"
      | "aa"
      | "af"
      | "ak"
      | "sq"
      | "am"
      | "ar"
      | "an"
      | "hy"
      | "as"
      | "av"
      | "ae"
      | "ay"
      | "az"
      | "bm"
      | "ba"
      | "eu"
      | "be"
      | "bn"
      | "bh"
      | "bi"
      | "bs"
      | "br"
      | "bg"
      | "my"
      | "ca"
      | "km"
      | "ch"
      | "ce"
      | "ny"
      | "zh"
      | "cu"
      | "cv"
      | "kw"
      | "co"
      | "cr"
      | "hr"
      | "cs"
      | "da"
      | "dv"
      | "nl"
      | "dz"
      | "en"
      | "eo"
      | "et"
      | "ee"
      | "fo"
      | "fj"
      | "fi"
      | "fr"
      | "ff"
      | "gd"
      | "gl"
      | "lg"
      | "ka"
      | "de"
      | "ki"
      | "el"
      | "kl"
      | "gn"
      | "gu"
      | "ht"
      | "ha"
      | "he"
      | "hz"
      | "hi"
      | "ho"
      | "hu"
      | "is"
      | "io"
      | "ig"
      | "id"
      | "ia"
      | "ie"
      | "iu"
      | "ik"
      | "ga"
      | "it"
      | "ja"
      | "jv"
      | "kn"
      | "kr"
      | "ks"
      | "kk"
      | "rw"
      | "kv"
      | "kg"
      | "ko"
      | "kj"
      | "ku"
      | "ky"
      | "lo"
      | "la"
      | "lv"
      | "lb"
      | "li"
      | "ln"
      | "lt"
      | "lu"
      | "mk"
      | "mg"
      | "ms"
      | "ml"
      | "mt"
      | "gv"
      | "mi"
      | "mr"
      | "mh"
      | "ro"
      | "mn"
      | "na"
      | "nv"
      | "nd"
      | "ng"
      | "ne"
      | "se"
      | "no"
      | "nb"
      | "nn"
      | "ii"
      | "oc"
      | "oj"
      | "or"
      | "om"
      | "os"
      | "pi"
      | "pa"
      | "ps"
      | "fa"
      | "pl"
      | "pt"
      | "qu"
      | "rm"
      | "rn"
      | "ru"
      | "sm"
      | "sg"
      | "sa"
      | "sc"
      | "sr"
      | "sn"
      | "sd"
      | "si"
      | "sk"
      | "sl"
      | "so"
      | "st"
      | "nr"
      | "es"
      | "su"
      | "sw"
      | "ss"
      | "sv"
      | "tl"
      | "ty"
      | "tg"
      | "ta"
      | "tt"
      | "te"
      | "th"
      | "bo"
      | "ti"
      | "to"
      | "ts"
      | "tn"
      | "tr"
      | "tk"
      | "tw"
      | "ug"
      | "uk"
      | "ur"
      | "uz"
      | "ve"
      | "vi"
      | "vo"
      | "wa"
      | "cy"
      | "fy"
      | "wo"
      | "xh"
      | "yi"
      | "yo"
      | "za"
      | "zu";
    is_reviewed: boolean;
    text: string;
    created_at: string;
  };
  user: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    email: string;
    created_at: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** key */
  "body.key": definitions["key"];
  "rowFilter.key.project_id": string;
  "rowFilter.key.name": string;
  "rowFilter.key.description": string;
  "rowFilter.key.created_at": string;
  /** language */
  "body.language": definitions["language"];
  "rowFilter.language.iso_code": string;
  "rowFilter.language.project_id": string;
  /** member */
  "body.member": definitions["member"];
  "rowFilter.member.organization_id": string;
  "rowFilter.member.user_id": string;
  "rowFilter.member.role": string;
  /** organization */
  "body.organization": definitions["organization"];
  "rowFilter.organization.id": string;
  "rowFilter.organization.name": string;
  "rowFilter.organization.created_by_user_id": string;
  "rowFilter.organization.created_at": string;
  /** project */
  "body.project": definitions["project"];
  "rowFilter.project.id": string;
  "rowFilter.project.api_key": string;
  "rowFilter.project.name": string;
  "rowFilter.project.organization_id": string;
  "rowFilter.project.default_iso_code": string;
  "rowFilter.project.created_at": string;
  /** translation */
  "body.translation": definitions["translation"];
  "rowFilter.translation.key_name": string;
  "rowFilter.translation.project_id": string;
  "rowFilter.translation.iso_code": string;
  "rowFilter.translation.is_reviewed": string;
  "rowFilter.translation.text": string;
  "rowFilter.translation.created_at": string;
  /** user */
  "body.user": definitions["user"];
  "rowFilter.user.id": string;
  "rowFilter.user.email": string;
  "rowFilter.user.created_at": string;
}

export interface operations {}

export interface external {}
